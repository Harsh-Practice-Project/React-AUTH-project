import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
// import  Mainlayout  from "../layouts/Mainlayout";
import About from "../pages/About";
import AuthLayout from "../layouts/AuthLayout";
import LoginPages from "../pages/LoginPages";
import RegisterPage from "../pages/RegisterPage";

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
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
