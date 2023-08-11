"use client";

import React from "react";
import { motion as m } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const Header = ({ isRedLayer }: { isRedLayer: boolean }) => {
  return (
    <header
      className={clsx(
        isRedLayer ? "text-black z-10" : "text-redis-gray  z-[1]",
        "flex px-8 py-4 items-center justify-between font-normal text-xl fixed inset-x-0 top-0"
      )}
    >
      <m.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
        MT
      </m.div>
      <ul className="text-sm text-right">
        <m.li initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
          <Link href={"#about"}>About</Link>
        </m.li>
        <m.li initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
          <Link href={"#work"}>Work</Link>
        </m.li>
        <m.li initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
          <Link href={"#contact"}>Contact</Link>
        </m.li>
      </ul>
    </header>
  );
};

export default Header;
