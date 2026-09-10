import { NavLink, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  const navLinkStyle = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg transition-all duration-300 font-medium
     ${
       isActive
         ? "bg-blue-600 text-white shadow-lg"
         : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
     }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/home")}
          className="cursor-pointer text-2xl font-bold tracking-wide text-blue-600"
        >
          AuthFlow
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <NavLink to="/home" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/profile" className={navLinkStyle}>
            Profile
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-800">
              {user?.name}
            </span>

            <span className="text-xs text-slate-500">{user?.email}</span>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
