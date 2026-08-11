import { AlertCircle } from "lucide-react";

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <p className="flex items-center gap-1 text-red-500 text-sm mt-1 justify-end">
      <AlertCircle size={14} />
      {message}
    </p>
  );
}
