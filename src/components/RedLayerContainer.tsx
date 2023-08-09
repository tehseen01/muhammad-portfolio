"use client";

import React from "react";
import useWindowCursor from "@/hooks/useWindowCursor";
import { motion as m } from "framer-motion";
import Contact from "./Contact";
import Work from "./Work";
import About from "./About";
import Hero from "./Hero";
import Header from "./Header";

const RedLayerContainer = () => {
  useWindowCursor();

  return (
    <m.div
      transition={{ duration: 0.3 }}
      className="absolute z-10 w-full h-full red-layer-mask red-layer-clip-path left-0 top-0 will-change-auto bg-orange-red"
    >
      <Header isRedLayer={true} />
      <Hero isRedLayer={true} />
      <About isRedLayer={true} />
      <Work isRedLayer={true} />
      <Contact isRedLayer={true} />
    </m.div>
  );
};

export default RedLayerContainer;
