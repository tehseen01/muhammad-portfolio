import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ClipPathBtn = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => stopClickHold();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--clip-path-size",
      `${counter}%`
    );
  }, [counter]);

  const startClickHold = () => {
    if (intervalRef.current || counter >= 100) return;

    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 5;
        if (newCounter >= 100) {
          return 100;
        }
        return newCounter;
      });
    }, 10);
  };

  const stopClickHold = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCounter(0);
  };

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 select-none z-20 md:hidden">
      <button
        onTouchStart={startClickHold}
        onTouchEnd={stopClickHold}
        onTouchCancel={stopClickHold}
      >
        <div className="relative">
          <span className="block animate-spin-slow">
            <Image
              src="/text-ring.svg"
              alt="text-ring"
              width={100}
              height={100}
            />
          </span>
          <span className="absolute inset-0 w-full h-full flex items-center justify-center select-none">
            <Image
              src="/touch.svg"
              alt="touch"
              width={20}
              height={20}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </span>
        </div>
      </button>
    </div>
  );
};

export default ClipPathBtn;
