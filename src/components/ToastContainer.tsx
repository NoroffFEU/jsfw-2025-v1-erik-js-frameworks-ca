"use client";

import { useToastStore } from "../features/toast/toast";

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-gray-800 text-white px-4 py-2 rounded shadow"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
