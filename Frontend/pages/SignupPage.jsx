import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="p-6 max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Sign Up
      </h2>
      <form className="bg-gray-800 shadow-md rounded-lg p-6">
        {/* Error Message Placeholder */}
        <p className="text-red-500 mb-4 hidden">Error message goes here</p>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white mb-2 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-white mb-2 font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Email/Password Signup Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-500 transition-colors duration-200 mb-4"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-1 border-gray-600" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        {/* Google Signup Button */}
        <button
          type="button"
          className="w-full bg-white text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-red-500" />
          Sign Up with Google
        </button>
      </form>

      {/* Login Link */}
      <p className="mt-4 text-center text-gray-300">
        Already have an account?{" "}
        <a href="/login" className="text-gray-300 hover:text-white">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
