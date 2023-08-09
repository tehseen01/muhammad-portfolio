import React, { useEffect, useState, useCallback } from "react";

const useWindowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
    document.documentElement.style.setProperty("--x", `${e.pageX}px`);
    document.documentElement.style.setProperty("--y", `${e.pageY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  return cursorPosition;
};

export default useWindowCursor;
