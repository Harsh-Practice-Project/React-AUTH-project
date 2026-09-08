import React from "react";
import { NavLink } from "react-router";
import LoginForm from "../forms/LoginForm";

const LoginPages = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto flex min-h-screen items-center px-4 py-8">
        <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
          {/* Left Section */}
          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white">
            <h1 className="mb-4 text-5xl font-bold">Welcome Back 👋</h1>

            <p className="max-w-sm text-lg text-blue-100">
              Sign in to continue and access your dashboard.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-800">Sign In</h2>
              </div>

              <LoginForm />

              <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-slate-200"></div>

                <span className="px-4 text-sm text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <p className="mt-6 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create Account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
