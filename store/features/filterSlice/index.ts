import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { AppStore } from "@/store";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type Filter = "all" | "active" | "completed";

export interface IFilterSlice {
  // state
  todos: Todo[];
  filter: Filter;

  // actions
  addTodo: (text: string) => void;
  updateTodo: (id: string, patch: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (f: Filter) => void;
  clearCompleted: () => void;
  toggleAll: (checked: boolean) => void;

  // computed as functions (typed)
  activeCount: () => number;
  completedCount: () => number;
}

export const filterSlice: StateCreator<AppStore, [], [], IFilterSlice> = (set, get) => ({
  // state
  todos: [],
  filter: "all",

  // computed functions
  activeCount: () => get().todos.filter((t) => !t.completed).length,
  completedCount: () => get().todos.filter((t) => t.completed).length,

  // actions
  addTodo: (text: string) => {
    const id = Date.now().toString();
    set((state) => ({
      todos: [...state.todos, { id, text, completed: false, createdAt: Date.now() }],
    }));
  },

  updateTodo: (id: string, patch: Partial<Todo>) =>
    set((state) => ({ todos: state.todos.map((t) => (t.id === id ? { ...t, ...patch } : t)) })),

  deleteTodo: (id: string) => set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),

  toggleTodo: (id: string) =>
    set((state) => ({ todos: state.todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)) })),

  setFilter: (f: Filter) => set(() => ({ filter: f })),

  clearCompleted: () => set((state) => ({ todos: state.todos.filter((t) => !t.completed) })),

  toggleAll: (checked: boolean) =>
    set((state) => ({ todos: state.todos.map((t) => ({ ...t, completed: checked })) })),
});