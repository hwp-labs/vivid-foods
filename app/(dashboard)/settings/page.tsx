"use client";

import { useRouter } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function SettingsPage() {
  const router = useRouter();

  const gotoDashboard = () => {
    router.push(PATH.dashboard);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>SettingsPage</h1>
      <button
        onClick={gotoDashboard}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Dashboard
      </button>
    </main>
  );
}
