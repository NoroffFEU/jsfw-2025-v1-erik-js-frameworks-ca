import { create } from "zustand";

interface Toast {
  id: string;
  message: string;
}

interface ToastState {
  toasts: Toast[];
  addToast: (message: string, timeout?: number) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  addToast: (message, timeout = 3000) => {
    const id = crypto.randomUUID();
    set((state) => ({ toasts: [...state.toasts, { id, message }] }));
    setTimeout(() => get().removeToast(id), timeout);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },
}));
