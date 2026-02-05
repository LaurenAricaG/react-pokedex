import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-50 px-4">
    <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3 shadow-sm">
      <AlertCircle className="h-5 w-5 text-red-500" />

      <p className="text-sm font-medium text-red-700">
        {message || "Ocurrió un error inesperado"}
      </p>
    </div>
  </div>
);

export default ErrorMessage;
