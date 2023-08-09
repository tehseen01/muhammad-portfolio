"use client";

import { markSimonson } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { useCircleVariant } from "./CircleSizeProvider";

const About = ({ isRedLayer }: { isRedLayer: boolean }) => {
  const { setVariant } = useCircleVariant();

  return (
    <section className="select-none">
      <div className="lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 mx-auto mt-8">
        <h2
          className={clsx(
            markSimonson.className,
            isRedLayer ? "text-black/90" : "text-redis-gray",
            "uppercase mb-4"
          )}
        >
          About me
        </h2>
        <div className="md:text-[4.2rem] sm:text-[3.5rem] text-[2.8rem] font-bold tracking-tighter text-redis-gray leading-none">
          {isRedLayer ? (
            <p
              className="text-black/90 break-all"
              onMouseEnter={() => setVariant("text")}
              onMouseLeave={() => setVariant("default")}
            >
              I craft immersive user experiences through clean, elegant code and
              responsive design, turning ideas into interactive realities.
            </p>
          ) : (
            <p>
              I{"'"}m a{" "}
              <span className="text-orange-red">selectively skilled</span>{" "}
              frontend developer with strong focus on producing high quality &
              impactful digital experience.
            </p>
          )}
        </div>
      </div>
      <div className=" my-12 py-4">
        <div
          className={clsx(
            isRedLayer
              ? "text-black/90 border-black"
              : "text-redis-gray border-gray-50/20",
            "border-b"
          )}
        >
          <h2
            className={clsx(
              markSimonson.className,
              "uppercase pb-4 max-md:py-6 lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 m-auto"
            )}
          >
            What i do
          </h2>
        </div>
        <div
          className="uppercase text-redis-gray group-[p] first:border-t"
          onMouseEnter={() => setVariant("none")}
          onMouseLeave={() => setVariant("default")}
        >
          {whatIdo.map((elem) => (
            <div
              className={clsx(
                isRedLayer
                  ? "border-black text-black/90"
                  : "border-gray-50/20 hover:text-black/90",
                "border-b md:z-10 md:text-8xl sm:text-7xl text-4xl tracking-tighter relative group"
              )}
              key={elem.id}
            >
              <div className="lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 m-auto max-md:py-6">
                <div>{elem.heading}</div>
                <div
                  className={clsx(
                    isRedLayer
                      ? ""
                      : "scale-y-0 group-hover:scale-y-100 md:-z-[1]",
                    "absolute inset-0 w-full h-full bg-orange-red transition-transform flex items-center justify-end"
                  )}
                >
                  <div className="text-black/90 text-base capitalize max-md:leading-tight tracking-normal md:pr-4 max-md:px-2 md:w-1/3">
                    {elem.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

export const whatIdo = [
  {
    id: 1,
    heading: "Responsive",
    text: "Creating interfaces that seamlessly adapt across devices, ensuring optimal user experiences on all screens.",
  },
  {
    id: 2,
    heading: "HTML/CSS",
    text: "Expertise in crafting structured HTML and CSS code for pixel-perfect designs and consistent styling.",
  },
  {
    id: 3,
    heading: "JavaScript",
    text: "Building interactive and dynamic web elements using modern JavaScript libraries and frameworks.",
  },
  {
    id: 4,
    heading: "Git / Github",
    text: "Efficiently collaborating with teams, managing codebase changes, and maintaining project integrity using Git version control.",
  },
  {
    id: 5,
    heading: "Test / Debugg",
    text: "Ensuring consistent functionality and appearance by meticulously testing and debugging across various browsers.",
  },
];
