"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const LoginPage = () => {
  // State variables for form inputs and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setError("");

    // Call signIn from next-auth
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // We handle the redirection manually
    });

    if (res?.error) {
      setError(res.error); // Set error message if login fails
    } else if (res?.ok) {
      // Redirect to dashboard on successful login
      window.location.href = "http://localhost:3000/dashboard";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  shadow-sm ">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
        <form onSubmit={onSubmit}>
          {/* Email input */}
          <div className="mb-4 text-black">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4 text-black">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
