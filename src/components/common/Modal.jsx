function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-800"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
