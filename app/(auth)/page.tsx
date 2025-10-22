"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";

export default function LoginPage() {
  const { isGuarding, handleLogin } = useAuthGuard();

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>LoginPage</h1>
      <button
        onClick={() =>
          handleLogin({
            email: "samuelalisigwe22@gmail.com",
            password: "samuel123$",
            rememberMe: true,
          })
        }
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign in {isGuarding ? "..." : ""}
      </button>
    </main>
  );
}
