import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth.js";

const AdminLayout = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="flex w-64 flex-col bg-slate-900 text-white">
        <div className="border-b border-slate-700 p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 transition ${
                    isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 transition ${
                    isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
                  }`
                }
              >
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 transition ${
                    isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
                  }`
                }
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
