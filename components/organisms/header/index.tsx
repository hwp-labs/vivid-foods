"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useAppStore } from "@/store";
import { useUserApi } from "@/store/services/userApi";

export const Header: React.FC = () => {
  const { isGuarding, handleLogout } = useAuthGuard();
  const { getUserProfileQuery } = useUserApi();
  const user = useAppStore((s) => s.user);

  return (
    <header className="flex items-center justify-between">
      <p>Hi, {getUserProfileQuery.isPending ? "..." : user.name}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign out {isGuarding ? "..." : ""}
      </button>
    </header>
  );
};
