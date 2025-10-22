"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useAppStore } from "@/store";
import { useUserApi } from "@/store/services/userApi";

export const Header: React.FC = () => {
  const { isGuarding, handleLogout } = useAuthGuard();
  const { getUserProfileQuery } = useUserApi();
  const user = useAppStore((s) => s.user);
  const context = useAppStore((s) => s.context);

  return (
    <header className="flex items-center justify-between">
      <p>Hi, {getUserProfileQuery.isPending ? "..." : user.name}</p>
      <p>Cart: {context.cart as number ?? 0}</p>
      <button onClick={handleLogout} className="btn-danger">
        Sign out {isGuarding ? "..." : ""}
      </button>
    </header>
  );
};
