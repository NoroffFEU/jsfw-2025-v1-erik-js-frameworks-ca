"use client";

import { useToastStore } from "../features/toast/toast";

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-gray-600 border border-green-300 shadow text-white px-4 py-2 rounded"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
