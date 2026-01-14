import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);

  const mobileJoinRef = useRef(null);
  const desktopJoinRef = useRef(null);

  // Read user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("emomate_user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Sync user when localStorage changes (signup/login/logout)
  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem("emomate_user");
      setUser(storedUser);
    };

    window.addEventListener("storage", syncUser);
    window.addEventListener("auth-change", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("auth-change", syncUser);
    };
  }, []);

  const closeMobileJoin = () => {
    if (mobileJoinRef.current) {
      mobileJoinRef.current.removeAttribute("open");
    }
  };

  const closeDesktopJoin = () => {
    if (desktopJoinRef.current) {
      desktopJoinRef.current.removeAttribute("open");
    }
  };

  const logout = () => {
    localStorage.removeItem("emomate_user");
    window.dispatchEvent(new Event("auth-change"));
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-[#020517] text-white shadow-md px-4 fixed top-0 left-0 w-full z-50">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 w-56 rounded-box bg-[#0f1729] p-2 shadow"
          >
            <li>
              <Link to="/" onClick={closeMobileJoin}>Home</Link>
            </li>

            <li>
              <Link
                to="/premium"
                className="px-4 py-1.5 rounded-full bg-[#5048e5] font-semibold hover:bg-[#3f3ad9]"
              >
                Get Premium
              </Link>
            </li>

            <li>
              <details ref={mobileJoinRef}>
                <summary>Join As</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/user-home" onClick={closeMobileJoin}>
                      I Need Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/listener-onboarding" onClick={closeMobileJoin}>
                      I Want to Support
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to="/about" onClick={closeMobileJoin}>About Us</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="px-2">
          <img
            src="/icon2.png"
            alt="EmoMate"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
          />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li><Link to="/">Home</Link></li>

          <li>
            <details ref={desktopJoinRef}>
              <summary className="cursor-pointer">Join As</summary>
              <ul className="p-2 bg-[#0f1729] rounded-box w-48 shadow">
                <li>
                  <Link to="/user-home" onClick={closeDesktopJoin}>
                    I Need Support
                  </Link>
                </li>
                <li>
                  <Link to="/listener-onboarding" onClick={closeDesktopJoin}>
                    I Want to Support
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li><Link to="/about">About Us</Link></li>

          <li>
            <Link
              to="/premium"
              className="px-4 py-1.5 rounded-full bg-[#5048e5] font-semibold hover:bg-[#3f3ad9]"
            >
              Get Premium
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-[#0f1729] border border-[#5048e5]/30 text-sm">
              {user}
            </span>

            <button
              onClick={logout}
              className="text-xs text-red-400 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/10 text-sm"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/10 text-sm"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
