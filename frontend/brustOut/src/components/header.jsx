export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-1 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Explore</a>
              <ul className="p-2">
                <li>
                  <a>For Students</a>
                </li>
                <li>
                  <a>For Mentors</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">EmoMate</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <a>Home</a>
          </li>

          <li>
            <details>
              <summary>Explore</summary>
              <ul className="p-2 bg-base-100 rounded-box w-44 shadow">
                <li>
                  <a>For Students</a>
                </li>
                <li>
                  <a>For Mentors</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-[#8a8e82] text-black hover:bg-[#5048e5] border-none">
          Get Started
        </a>
      </div>
    </div>
  );
}
