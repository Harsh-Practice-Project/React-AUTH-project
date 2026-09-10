import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPages from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Profile from "../pages/user/Profile";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import AdminLayout from "../layouts/AdminLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginPages />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <Mainlayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
