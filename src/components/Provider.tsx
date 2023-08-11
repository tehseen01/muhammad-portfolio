"use client";

import React, { useState } from "react";
import RedLayerContainer from "./RedLayerContainer";
import CircleSizeProvider from "./CircleSizeProvider";
import ClipPathBtn from "./ClipPathBtn";
import Loader from "./Loader";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <CircleSizeProvider>
      {hideLoader ? (
        <Loader setHideLoader={setHideLoader} hideLoader={hideLoader} />
      ) : (
        <main className="overflow-hidden h-full relative">
          <RedLayerContainer />
          {children}
          <ClipPathBtn />
        </main>
      )}
    </CircleSizeProvider>
  );
};

export default Provider;
