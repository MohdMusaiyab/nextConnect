"use client";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return <div>Access Denied</div>;

  return (
    <div>
      Welcome to the dashboard
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default page;
