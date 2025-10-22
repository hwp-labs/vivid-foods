"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/store";
import { PATH } from "@/constants/PATH";

export default function DashboardPage() {
  const router = useRouter();
  const context = useAppStore((s) => s.context);
  const setContext = useAppStore((s) => s.setContext);
  const setStartDate = useAppStore((s) => s.setStartDate);
  const setEndDate = useAppStore((s) => s.setEndDate);
  const setMinPrice = useAppStore((s) => s.setMinPrice);
  const setMaxPrice = useAppStore((s) => s.setMaxPrice);

  const gotoSettings = () => {
    router.push(PATH.settings);
  };

  const handleAddToCart = () => {
    if (!context.cart) {
      setContext({ cart: 1 });
    } else {
      setContext({ cart: Number(context.cart) + 1 });
    }
  };

  const handleFilterBy = () => {
    setStartDate(new Date);
    setEndDate(new Date);
    setMinPrice(Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000);
    setMaxPrice(Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>DashboardPage</h1>
      <button onClick={gotoSettings} className="btn-primary">
        Settings
      </button>
      <button onClick={handleAddToCart} className="btn-secondary">
        Add to Cart
      </button>
      <button onClick={handleFilterBy} className="btn-secondary">
        Filter by:
      </button>
    </main>
  );
}
