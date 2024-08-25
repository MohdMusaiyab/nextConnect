"use client";
import React from "react";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Render a loading spinner or a placeholder while loading
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <p className="mt-4 text-xl">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    // Optionally redirect to sign-in or show a message
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">You need to sign in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold mb-8">{`Welcome ${session?.user?.name || "User"}`}</h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full px-8 max-w-4xl">
        {/* Create Email Template */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-center">Create Email Template</h2>
          <p className="text-gray-300 mb-4">Design and customize your email templates easily.</p>
          <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Create Template
          </button>
        </div>

        {/* Upload Resume */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Resume</h2>
          <p className="text-gray-300 mb-4">Upload your latest resume to use in your emails.</p>
          <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Upload Resume
          </button>
        </div>

        {/* Upload Cover Letter */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Cover Letter</h2>
          <p className="text-gray-300 mb-4">Upload a cover letter to use with your emails.</p>
          <button className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Upload Cover Letter
          </button>
        </div>
      </div>

      {/* Mini Dashboard */}
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Pending Emails</h2>
        <div className="space-y-6">
          {/* Example Email Card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Recipient Name</h3>
            <p className="text-gray-300 mb-2">recipient@example.com</p>
            <p className="text-gray-200 mb-4">This is a brief preview of the email body content. It's concise and provides a quick overview of the email.</p>
            <div className="flex space-x-4">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Resume.pdf</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">CoverLetter.docx</span>
            </div>
          </div>

          {/* Add more email cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
