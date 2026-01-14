import { useEffect, useState } from "react";
import socket from "../socket/socket.jsx";
import { useParams, useLocation } from "react-router-dom";

let peer; 

export default function Room() {
  const { roomId } = useParams();
  const name = new URLSearchParams(useLocation().search).get("name");
  console.log(name,roomId);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const startCall = async () => {
    peer = new RTCPeerConnection();

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    document.getElementById("localVideo").srcObject = stream;

    stream.getTracks().forEach((track) => peer.addTrack(track, stream));

    peer.ontrack = (event) => {
      document.getElementById("remoteVideo").srcObject = event.streams[0];
    };

    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", { roomId, candidate: e.candidate });
      }
    };

    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);

    socket.emit("offer", { roomId, offer });
  };

  useEffect(() => {
    socket.emit("join-room", { roomId, name });

    socket.on("receive-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("offer", async (offer) => {
      peer = new RTCPeerConnection();

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      document.getElementById("localVideo").srcObject = stream;

      stream.getTracks().forEach((track) => peer.addTrack(track, stream));

      peer.ontrack = (event) => {
        document.getElementById("remoteVideo").srcObject = event.streams[0];
      };

      peer.onicecandidate = (e) => {
        if (e.candidate) {
          socket.emit("ice-candidate", { roomId, candidate: e.candidate });
        }
      };

      await peer.setRemoteDescription(offer);
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);

      socket.emit("answer", { roomId, answer });
    });

    socket.on("answer", async (answer) => {
      await peer.setRemoteDescription(answer);
    });

    socket.on("ice-candidate", async (candidate) => {
      try {
        await peer.addIceCandidate(candidate);
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      socket.off("receive-message");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", { roomId, message, name });
    setMessage("");
  };

  return (
    <div>
      <h2>Room: {roomId}</h2>

      <video id="localVideo" autoPlay muted playsInline width="200" />
      <video id="remoteVideo" autoPlay playsInline width="200" />

      {messages.map((m, i) => (
        <p key={i}>
          <b>{m.name}</b>: {m.message}
        </p>
      ))}

      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>

      <br /><br />
      <button onClick={startCall}>Start Call</button>
    </div>
  );
}
