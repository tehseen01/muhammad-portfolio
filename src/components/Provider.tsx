"use client";

import React from "react";
import RedLayerContainer from "./RedLayerContainer";
import useDeviceSize from "@/hooks/useDeviceSize";
import CircleSizeProvider from "./CircleSizeProvider";
import ClipPathBtn from "./ClipPathBtn";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { width } = useDeviceSize();

  return (
    <CircleSizeProvider>
      <main className="overflow-hidden h-full relative">
        <RedLayerContainer />
        {children}
        <ClipPathBtn />
      </main>
    </CircleSizeProvider>
  );
};

export default Provider;
