import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_SERVER_DOMAIN;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(`${API}/user/login`, {
        username: formData.username,
        password: formData.password,
      });

      // ✅ STORE USER (same key used everywhere)
      localStorage.setItem("emomate_user", res.data.username);

      // ✅ NOTIFY HEADER TO UPDATE UI
      window.dispatchEvent(new Event("auth-change"));

      // ✅ REDIRECT TO USER DASHBOARD
      navigate("/user-home");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#020517] flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center gap-24 w-full max-w-6xl">

        {/* LOGIN CARD */}
        <div
          className="
            bg-[#0f1729]
            text-white
            rounded-2xl
            w-full max-w-md
            border border-[#5048e5]/20
            p-10
            shadow-2xl
          "
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#5048e5]/20">
                <span className="text-xl">🌱</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-white">
              Welcome back
            </h2>
            <p className="text-sm text-[#91c3fd]/70 mt-1">
              Enter using your anonymous name
            </p>
          </div>

          {/* USERNAME */}
          <label className="block mb-2 text-sm text-[#91c3fd]/80">
            Anonymous name
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="e.g. SilentMoon421"
            className="
              w-full mb-6
              px-4 py-3
              rounded-xl
              bg-[#020517]
              text-white placeholder:text-[#91c3fd]/50
              border border-[#5048e5]/30
              focus:border-[#91c3fd]
              focus:ring-4 focus:ring-[#5048e5]/30
              outline-none
            "
          />

          {/* PASSWORD */}
          <label className="block mb-2 text-sm text-[#91c3fd]/80">
            Password
          </label>

          <div className="relative mb-8">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Only you will know this"
              className="
                w-full h-11 px-4 pr-12
                rounded-xl
                bg-[#020517]
                text-white placeholder:text-[#91c3fd]/50
                border border-[#5048e5]/30
                focus:border-[#91c3fd]
                focus:ring-4 focus:ring-[#5048e5]/30
                outline-none
              "
            />

            {/* Eye toggle */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-2 top-2 bottom-2
                w-8
                flex items-center justify-center
                rounded-lg
                text-[#91c3fd]/60
                hover:text-[#91c3fd]
                hover:bg-[#5048e5]/10
                transition
              "
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="button"
            onClick={handleLogin}
            className="
              emomate-primary-btn
              w-full h-11
              rounded-xl
              text-white font-medium
              transition
            "
          >
            Enter anonymously
          </button>

          {/* FOOTER */}
          <p className="text-center text-xs text-[#91c3fd]/60 mt-6">
            New here?{" "}
            <Link to="/signup" className="text-[#91c3fd] hover:underline">
              Create an anonymous name
            </Link>
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="https://www.inetsoft.com/images/screenshots/gallery/census.PNG"
          alt="dashboard"
          className="
            hidden lg:block
            h-105
            w-auto
            transition-transform duration-700 ease-out
            transform-gpu
            rotate-x-12 rotate-y-12
            hover:rotate-x-0 hover:rotate-y-0 hover:scale-[1.02]
          "
        />
      </div>
    </div>
  );
}
