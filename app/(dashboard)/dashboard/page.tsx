"use client";

import { useRouter } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function DashboardPage() {
  const router = useRouter();

  const gotoSettings = () => {
    router.push(PATH.settings);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>DashboardPage</h1>
      <button
        onClick={gotoSettings}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Settings
      </button>
    </main>
  );
}
