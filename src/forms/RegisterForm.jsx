import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import bcrypt from "bcryptjs";
import { registerSchema } from "../validation/validation.js";
import { saveRegisteredUser } from "../services/authService.js";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const userData = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      password: hashedPassword,
      role: "user",
      isActive: true,
      createdAt: new Date().toISOString(),
    };

    const isSaved = saveRegisteredUser(userData);

    if (!isSaved) {
      toast.error("Email already registered");
      return;
    }

    reset();

    toast.success("User Registered Successfully");

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>

        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            {...register("name")}
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
          />
        </div>

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
          />
        </div>

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...register("password")}
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
          />
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
