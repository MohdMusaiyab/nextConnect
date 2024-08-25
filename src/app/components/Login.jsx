"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center">
      {status === "loading" ? (
        <span className="text-gray-500">Loading...</span>
      ) : session?.user ? (
        <Link href="/profile" className="flex items-center space-x-4">
          <img
            src={session.user.image || "/default-profile.png"} // Fallback image in case user image is not available
            alt={session.user.name || "User"}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white font-semibold">{session.user.name}</span>
        </Link>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Login;
