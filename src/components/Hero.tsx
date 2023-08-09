"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

import { markSimonson } from "../app/fonts";
import { useCircleVariant } from "./CircleSizeProvider";
import Link from "next/link";

const Hero = ({ isRedLayer }: { isRedLayer: boolean }) => {
  const { setVariant } = useCircleVariant();

  const container = {
    hidden: { y: "100%" },
    show: {
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: 0 },
  };

  return (
    <section
      id="about"
      className={clsx(
        isRedLayer
          ? ""
          : "bg-[url(../../public/vr.jpg)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left before:absolute before:inset-0 before:bg-black/40 before:w-full before:h-full",
        "px-8 py-4 h-[100vh] flex flex-col items-center justify-center relative"
      )}
    >
      {!isRedLayer && (
        <div className="absolute bottom-4 left-10 max-md:hidden z-20">
          <motion.ul
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-full flex flex-col gap-8 justify-end "
          >
            {icons.map((icon) => (
              <Link href={icon.link} key={icon.id}>
                <icon.icon className="w-5 h-5 text-redis-gray hover:text-black" />
              </Link>
            ))}
          </motion.ul>
        </div>
      )}
      <div className="select-none flex flex-col justify-center items-center relative">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
              markSimonson.className,
              isRedLayer ? "text-black/90" : "text-redis-gray",
              "uppercase mb-4"
            )}
          >
            Muhammad Tehseen
          </motion.h2>
        </div>
        {isRedLayer ? (
          <div
            onMouseEnter={() => setVariant("text")}
            onMouseLeave={() => setVariant("default")}
          >
            <h1
              className={clsx(
                isRedLayer ? "text-black/90" : "text-redis-gray",
                "md:text-8xl sm:text-7xl text-6xl uppercase tracking-tighter leading-none text-center"
              )}
            >
              <div className="overflow-hidden">I Create</div>
              <div className="overflow-hidden">wonders</div>
              <div className="overflow-hidden">for the</div>
              <div className="overflow-hidden">web.</div>
            </h1>
          </div>
        ) : (
          <div>
            <motion.h1
              className="md:text-8xl sm:text-7xl text-6xl uppercase text-redis-gray tracking-tighter leading-none text-center"
              variants={container}
              animate="show"
              initial="hidden"
            >
              <div className="overflow-hidden">
                <motion.span className="block " variants={item}>
                  frontend
                </motion.span>
              </div>
              <div className="text-orange-red overflow-hidden">
                <motion.span className="block " variants={item}>
                  developer
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span className="block " variants={item}>
                  Based in
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span className="block " variants={item}>
                  India.
                </motion.span>
              </div>
            </motion.h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

const icons = [
  {
    id: 1,
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/mohd-tehseen-962635271",
  },
  {
    id: 2,
    icon: BsGithub,
    link: "https://github.com/tehseen01",
  },
  {
    id: 3,
    icon: BsInstagram,
    link: "https://instagram.com/tehseen.01",
  },
  {
    id: 4,
    icon: BsTwitter,
    link: "https://twitter.com/tehseen_type",
  },
];
