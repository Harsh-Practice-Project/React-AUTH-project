import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
