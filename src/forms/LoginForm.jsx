import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/validation.js";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth.js";
import { findRegisteredUserByEmail, saveUser } from "../services/authService";

const LoginForm = () => {
  let navigate = useNavigate();

  let { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const registeredUser = findRegisteredUserByEmail(data.email);

    // User Not Found OR Password Wrong
    if (!registeredUser || registeredUser.password !== data.password) {
      toast.error("Invalid email or password");
      return;
    }

    // Save Logged In User
    saveUser(registeredUser);

    // Update Context
    login(registeredUser);

    // Success Message
    toast.success("Logged In Successfully");

    // Redirect
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email Address
        </label>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition
              ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-indigo-500"
              }`}
          />
        </div>

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition
              ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-indigo-500"
              }`}
          />
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
