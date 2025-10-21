import { create } from "zustand";

interface AuthState {
  token: string | null;
  email: string | null;
  role: string | null;
  setAuth: (data: { token: string; email: string; role: string }) => void;
  logout: () => void;
}

export const useAppStore = create<AuthState>((set) => ({
  token: null,
  email: null,
  role: null,
  setAuth: ({ token, email, role }) => set({ token, email, role }),
  logout: () => set({ token: null, email: null, role: null }),
}));
