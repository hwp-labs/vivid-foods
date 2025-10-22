"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useAppStore } from "@/store";
import { useUserApi } from "@/store/services/userApi";

export const Header: React.FC = () => {
  const { isGuarding, handleLogout } = useAuthGuard();
  const { getUserProfileQuery } = useUserApi();
  const user = useAppStore((s) => s.user);
  const context = useAppStore((s) => s.context);
  const startDateStr = useAppStore((s) => s.startDateStr);
  const endDateStr = useAppStore((s) => s.endDateStr);
  const dateRange = useAppStore((s) => s.dateRange);
  const minPriceStr = useAppStore((s) => s.minPriceStr);
  const maxPriceStr = useAppStore((s) => s.maxPriceStr);
  const priceRange = useAppStore((s) => s.priceRange);

  console.log("🚀 ~ Header ~ dateRange:", dateRange)

  return (
    <header className="flex items-center justify-between">
      <p>Hi, {getUserProfileQuery.isPending ? "..." : user.name}</p>
      <p>Date: {startDateStr}-/-{endDateStr}</p>
      <p>Price: {minPriceStr}-/-{maxPriceStr}</p>
      <p>Cart: {context.cart as number ?? 0}</p>
      <button onClick={handleLogout} className="btn-danger">
        Sign out {isGuarding ? "..." : ""}
      </button>
    </header>
  );
};
