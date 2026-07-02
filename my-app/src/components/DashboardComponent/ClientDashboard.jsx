"use client";

import { LogOut } from "@/SupabaseApi/Login";

export default function Dashboard() {
  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      return;
    }
    alert("logging out");
    window.location.replace("/login");
  };

  return (
    <>
      Dashboard
      <button type="button" onClick={handleLogOut}>
        logout
      </button>
    </>
  );
}
