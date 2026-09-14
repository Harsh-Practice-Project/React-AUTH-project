import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/validation.js";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth.js";
import {
  findRegisteredUserByEmail,
  saveUser,
} from "../services/authService.js";
import bcrypt from "bcryptjs";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

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

    if (!registeredUser) {
      toast.error("Invalid email or password");
      return;
    }

    const isPasswordValid = bcrypt.compareSync(
      data.password,
      registeredUser.password,
    );

    if (!isPasswordValid) {
      toast.error("Invalid email or password");
      return;
    }

    saveUser(registeredUser);

    login(registeredUser);

    toast.success("Logged In Successfully");

    if (registeredUser.role === "admin") {
      navigate("/admin/dashboard", { replace: true });
    } else {
      navigate("/home",  { replace: true });
    }
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
            autoComplete="email"
            {...register("email")}
            className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition ${
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
            autoComplete="current-password"
            {...register("password")}
            className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition ${
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

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          Forgot Password?
        </button>
      </div>

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
