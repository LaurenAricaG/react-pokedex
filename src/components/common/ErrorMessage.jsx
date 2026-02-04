const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-50">
    <div className="text-sm text-red-700 mt-1">
      <p>{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
