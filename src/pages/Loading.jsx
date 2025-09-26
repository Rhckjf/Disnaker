// src/components/Loading.jsx
import React, { useEffect } from "react";

export default function Loading({ onSkip }) {
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Enter" || e.key === " ") onSkip?.();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onSkip]);

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center bg-black text-gray-200"
      onClick={onSkip}
      role="button"
      aria-label="Enter site"
      tabIndex={0}
    >
      <img
        src="/cover.png"
        alt="Cover"
        className="w-64 max-w-[60%] animate-fade-in-up select-none"
        draggable="false"
      />
    </div>
  );
}
