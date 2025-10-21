"use client";

import { useAuthApi } from "@/store/services/authApi/hook";

export default function LoginPage() {
  const { loginMutation } = useAuthApi();

  const handleLogin = () => {
    loginMutation
      .mutateAsync({
        email: "samuelalisigwe22@gmail.com",
        password: "samuel123$",
        rememberMe: true,
      })
      .then((res) => {
        console.log("🚀 ~ handleLogin ~ res:", res);
      })
      .catch((err) => {
        console.log("🚀 ~ handleLogin ~ err:", err);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>LoginPage</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login {loginMutation.isPending ? "..." : ""}
      </button>
    </main>
  );
}
