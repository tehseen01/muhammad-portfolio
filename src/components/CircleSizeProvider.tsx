"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CircleContext = createContext({
  variant: "default",
  setVariant: (variant: "default" | "text" | "link" | "none") => {},
});

const CircleSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState<"default" | "text" | "link" | "none">(
    "default"
  );

  useEffect(() => {
    if (window.innerWidth < 768) {
      return document.documentElement.style.setProperty("--size", "0px");
    }
    switch (variant) {
      case "text":
        return document.documentElement.style.setProperty("--size", "320px");
      case "default":
        return document.documentElement.style.setProperty("--size", "50px");
      case "none":
        return document.documentElement.style.setProperty("--size", "0px");
      default:
        return;
    }
  }, [variant]);

  return (
    <CircleContext.Provider value={{ variant, setVariant }}>
      {children}
    </CircleContext.Provider>
  );
};

export default CircleSizeProvider;

export const useCircleVariant = () => {
  const context = useContext(CircleContext);
  return context;
};
