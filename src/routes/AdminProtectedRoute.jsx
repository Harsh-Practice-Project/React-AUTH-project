import React from "react";
import useAuth from "../hooks/useAuth.js";
import { Navigate, Outlet } from "react-router";

const AdminProtectedRoute = () => {
  const { user, isAuthenticated } = useAuth();

  // User logged in nahi hai
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // User logged in hai lekin admin nahi hai
  if (user?.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  // Admin hai
  return <Outlet />;
};

export default AdminProtectedRoute;
