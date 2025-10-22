import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { AppStore } from "@/store";

export interface IPageSlice {
  user: { id: string; name: string } | null;
  setUser: (u: { id: string; name: string } | null) => void;
  isLoggedIn: () => boolean;
}

export const pageSlice: StateCreator<AppStore, [], [], IPageSlice> = (set, get) => ({
  user: null,
  setUser: (u) => set(() => ({ user: u })),
  isLoggedIn: () => !!get().user,
});