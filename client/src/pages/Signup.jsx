import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    // Proceed with signup
    toast.success("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-gray-950 border-[.5px] border-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your details below to create your account and get started
        </p>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-400">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg focus:outline-none focus:border-gray-500 pr-10"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded-xl mt-4 hover:bg-blue-900 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
