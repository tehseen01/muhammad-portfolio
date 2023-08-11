"use client";

import React from "react";
import clsx from "clsx";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

import { markSimonson } from "../app/fonts";
import { useCircleVariant } from "./CircleSizeProvider";
import Link from "next/link";

const Hero = ({ isRedLayer }: { isRedLayer: boolean }) => {
  const { setVariant } = useCircleVariant();

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
          <div className="h-full flex flex-col gap-8 justify-end ">
            {icons.map((icon) => (
              <Link
                href={icon.link}
                key={icon.id}
                target="_blank"
                aria-label={icon.label}
              >
                <icon.icon className="w-5 h-5 text-redis-gray hover:text-black" />
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="select-none flex flex-col justify-center items-center relative">
        <div className="overflow-hidden">
          <h2
            className={clsx(
              markSimonson.className,
              isRedLayer ? "text-black/90" : "text-redis-gray",
              "uppercase mb-4"
            )}
          >
            Muhammad Tehseen
          </h2>
        </div>
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
            {isRedLayer ? (
              <>
                <div className="overflow-hidden">I Create</div>
                <div className="overflow-hidden">wonders</div>
                <div className="overflow-hidden">for the</div>
                <div className="overflow-hidden">web.</div>
              </>
            ) : (
              <>
                <div className="overflow-hidden">frontend</div>
                <div className="text-orange-red overflow-hidden">developer</div>
                <div className="overflow-hidden">Based in</div>
                <div className="overflow-hidden">India.</div>
              </>
            )}
          </h1>
        </div>
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
    label: "view the linkedin profile",
  },
  {
    id: 2,
    icon: BsGithub,
    link: "https://github.com/tehseen01",
    label: "view the github profile",
  },
  {
    id: 3,
    icon: BsInstagram,
    link: "https://instagram.com/tehseen.01",
    label: "view the instagram profile",
  },
  {
    id: 4,
    icon: BsTwitter,
    link: "https://twitter.com/tehseen_type",
    label: "view the twitter profile",
  },
];
