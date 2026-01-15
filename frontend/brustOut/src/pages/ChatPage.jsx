import { useEffect, useRef, useState } from "react";
import socket from "../socket/socket.jsx";
import { useParams, useLocation } from "react-router-dom";

import ChatHeader from "../components/chat/ChatHeader";
import MessageBubble from "../components/chat/MessageBubble";
import ChatInput from "../components/chat/ChatInput";
// import { listener } from "../data/dummyChat";

let peer;

export default function ChatRoomPage() {
  const { roomId } = useParams();
  const name = new URLSearchParams(useLocation().search).get("name");
  let role = "user";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let headerProps = {
    name,
    role,
  };
  const bottomRef = useRef(null);

  // 🔌 Socket.IO + WebRTC
  useEffect(() => {
    socket.emit("join-room", { roomId, name });

    // Receiving chat messages
    socket.on("receive-message", (data) => {
      if (data.name === name) return;
      setMessages((prev) => [
        ...prev,
        {
          sender: data.name,
          text: data.message,
          id: Date.now(),
          time: new Date().toLocaleDateString(),
        },
      ]);
    });
    // WebRTC: Receiving offer
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

    // WebRTC: Receiving answer
    socket.on("answer", async (answer) => {
      await peer.setRemoteDescription(answer);
    });

    // WebRTC: ICE candidates
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
  }, [roomId, name]);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // const handleSendMessage = () => {
  //   if (!message.trim()) return;
  //   console.log(message);
  //   socket.emit("send-message", { roomId, message, name });
  //   const msgObj = {
  //     sender: name,
  //     text: message,
  //     id: Date.now(),
  //     time: new Date().toLocaleTimeString(), // generate time here
  //   };
  //   console.log(msgObj.text);
  //   setMessages((prev) => [...prev, msgObj]);

  //   setMessage("");
  // };

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

  return (
    <div className="h-screen flex flex-col bg-[#020517] overflow-hidden">
      <ChatHeader listener={headerProps} />

      {/* Video call area
      <div className="flex gap-4 p-2 justify-center">
        <video
          id="localVideo"
          autoPlay
          muted
          playsInline
          className="w-48 h-32 rounded-md border border-gray-700"
        />
        <video
          id="remoteVideo"
          autoPlay
          playsInline
          className="w-48 h-32 rounded-md border border-gray-700"
        />
      </div> */}

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} currentUser={name} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3">
        <ChatInput
          onSend={(text) => {
            if (!text.trim()) return;

            const msgObj = {
              sender: name,
              text,
              id: Date.now(),
              time: new Date().toLocaleTimeString(),
            };

            // Emit to backend
            socket.emit("send-message", { roomId, message: text, name });

            // Update local messages
            setMessages((prev) => [...prev, msgObj]);
            console.log(messages);
          }}
        />

        <button
          className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          onClick={startCall}
        >
          Start Call
        </button>
      </div>
    </div>
  );
}
