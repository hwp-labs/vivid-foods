"use client";

import { useAuthApi } from "@/store/services/authApi/hook";
import { useUserApi } from "@/store/services/userApi/hook";

export default function DashboardPage() {
  const { logoutMutation } = useAuthApi();
  const { getUserProfileQuery } = useUserApi();

  const handleLogout = () => {
    logoutMutation
      .mutateAsync()
      .then((res) => {
        console.log("🚀 ~ handleLogout ~ res:", res);
      })
      .catch((err) => {
        console.log("🚀 ~ handleLogout ~ err:", err);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>DashboardPage</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign out
      </button>
    </main>
  );
}
