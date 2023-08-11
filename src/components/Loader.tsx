"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

interface ILoaderProp {
  hideLoader: boolean;
  setHideLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader = ({ setHideLoader, hideLoader }: ILoaderProp) => {
  const [counter, setCounter] = useState(0);

  const followRef = useRef(null);
  const hideRef = useRef(null);
  const leftToRightRef = useRef(null);
  const rightToLeftRef = useRef(null);

  const reveal = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        console.log("complete");
        setHideLoader(false);
      },
    });
    tl.to(followRef.current, {
      width: "100%",
      duration: 0.5,
      delay: 0.5,
    })
      .to(hideRef.current, {
        opacity: 0,
        delay: 0.3,
      })
      .to(followRef.current, {
        height: "100%",
        duration: 0.5,
        delay: 0.5,
      })
      .to(leftToRightRef.current, {
        width: "100%",
        duration: 0.5,
        delay: 0.5,
      })
      .to(rightToLeftRef.current, {
        width: "100%",
        duration: 0.5,
        delay: 0.5,
      });
  }, [setHideLoader]);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 1);
      } else {
        clearInterval(count);
        reveal();
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter, reveal]);

  return (
    <div className="fixed inset-0 bg-black/90 text-redis-gray z-50 w-full h-full flex items-center justify-center flex-col">
      <div className="text-8xl" ref={hideRef}>
        {counter}%
      </div>
      <div
        className="w-0 h-[1px] bg-redis-gray absolute left-0"
        ref={followRef}
      ></div>
      <div
        className="w-0 h-full bg-orange-red absolute left-0"
        ref={leftToRightRef}
      ></div>
      <div
        className="w-0 h-full bg-black/90 absolute right-0"
        ref={rightToLeftRef}
      ></div>
    </div>
  );
};

export default Loader;
