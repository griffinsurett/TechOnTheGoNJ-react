// src/components/Modal.jsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function Modal({
  isOpen,
  onClose,
  children,
  closeButton = true,
  closeButtonClass = "absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full p-2 transition-colors",
  overlayClass = 'bg-black bg-opacity-50',
  className = "bg-white shadow-xl p-6 rounded-lg",
  allowScroll = false,
}) {
  // State to keep the modal in the DOM until exit animation completes
  const [mounted, setMounted] = useState(isOpen);
  const modalRef = useRef(null);

  // If isOpen becomes true, ensure we render
  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  // Lock scroll while open
  useEffect(() => {
    if (mounted && !allowScroll) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = orig };
    }
  }, [mounted, allowScroll]);

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    if (mounted) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted, onClose]);

  // After exit animation ends, actually unmount
  const handleAnimationEnd = () => {
    if (!isOpen) setMounted(false);
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        ${overlayClass}
        transform transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
      onTransitionEnd={handleAnimationEnd}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={`
          relative ${className}
          transform-gpu transition-transform duration-300 ease-in-out
          origin-center
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        onClick={e => e.stopPropagation()}
      >
        {closeButton && (
          <button onClick={onClose} className={closeButtonClass} aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}