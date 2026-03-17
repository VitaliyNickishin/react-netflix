import { createPortal } from "react-dom";
import { useEffect } from "react";

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm items-center justify-center">
      <div className="top-1/2 left-1/2 -translate-1/2 relative w-[78%] max-w-xl bg-neutral-900 text-white p-6 rounded-2xl shadow-lg animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-600 transition"
          aria-label="Close modal"
        >
          ❌
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
