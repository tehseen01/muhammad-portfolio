"use client";

import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="w-8 h-8 bg-white rounded-full fixed top-0 left-0  cursor pointer-events-none"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      ></div>
      {children}
    </div>
  );
};

export default Provider;
