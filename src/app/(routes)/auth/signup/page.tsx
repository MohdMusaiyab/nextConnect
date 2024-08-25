"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        router.push("/");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-600 text-center">{error}</p>}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-500 transition-all duration-300"
          >
            Sign Up
          </button>
          <p className="text-sm text-center text-gray-600">Already have an account?</p>
          <button
            onClick={() => router.push("/auth/signin")}
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:from-blue-500 hover:to-green-400 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
