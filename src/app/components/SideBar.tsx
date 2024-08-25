"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="w-40 text-white min-h-screen flex flex-col hidden md:flex">
      <div className="flex flex-col py-6 px-4">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav className="flex flex-col space-y-2">
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            Profile
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            Settings
          </Link>
          {/* Add more links as needed */}
        </nav>
        <button
          onClick={() => signOut()}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-lg font-medium transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
