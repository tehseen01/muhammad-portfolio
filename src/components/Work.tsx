"use client";

import { markSimonson } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import { useCircleVariant } from "./CircleSizeProvider";
import Link from "next/link";

const Work = ({ isRedLayer }: { isRedLayer: boolean }) => {
  const { setVariant } = useCircleVariant();

  return (
    <section className="md:my-8 my-4" id="work">
      <div
        className={clsx(
          isRedLayer
            ? ""
            : "bg-[url(../../public/objects.jpg)] bg-cover bg-no-repeat bg-fixed bg-center before:absolute before:inset-0",
          "h-[100vh] relative before:bg-black/60 before:w-full before:h-full py-16"
        )}
      >
        <div className="relative z-[1] lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 mx-auto">
          <h2
            className={clsx(
              markSimonson.className,
              isRedLayer ? "text-black/90" : "text-redis-gray",
              "uppercase mb-4 tracking-widest"
            )}
          >
            experience
          </h2>
          <div className="md:text-[4.2rem] sm:text-[3.5rem] text-[2.8rem] font-bold tracking-tighter text-redis-gray leading-none">
            {isRedLayer ? (
              <p
                className={clsx(isRedLayer ? "text-black/90" : "", "break-all")}
                onMouseEnter={() => setVariant("text")}
                onMouseLeave={() => setVariant("default")}
              >
                By focusing on user needs and seamless navigation, I ensure each
                project delivers not just visuals, but meaningful experiences.
              </p>
            ) : (
              <p>
                With a <span className="text-orange-red">passion</span> for
                turning concepts into interactive realities, I bring innovation
                and functionality to every project.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="py-16">
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
              "uppercase pb-4 lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 m-auto"
            )}
          >
            History
          </h2>
        </div>
        <div
          className="uppercase text-redis-gray group-[p]"
          onMouseEnter={() => setVariant("none")}
          onMouseLeave={() => setVariant("default")}
        >
          {projects.map((project) => (
            <div
              className={clsx(
                isRedLayer
                  ? "border-black text-black/90"
                  : "border-gray-50/20 hover:text-black/90",
                "border-b md:z-10 tracking-tighter relative group before:absolute before:inset-0 before:w-full before:h-full before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:z-[-1] before:bg-orange-red"
              )}
              key={project.id}
            >
              <div className="py-8 lg:w-3/4 md:w-4/5 sm:w-10/12 w-11/12 m-auto flex ">
                <div className="flex-1">
                  <h3 className="md:text-6xl sm:text-5xl text-3xl">
                    {project.name}
                  </h3>
                  <div>
                    <span>{project.time}</span>
                  </div>
                </div>
                <div className="group-hover:text-black/90 text-redis-gray sm:group-hover:opacity-100 sm:opacity-0 flex justify-between flex-col capitalize tracking-normal">
                  <Link href={project.liveLink} target="_blank">
                    Live
                  </Link>
                  <Link href={project.githubLink} target="_blank">
                    Github
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

export const projects = [
  {
    id: 1,
    name: "Portfolio",
    time: "Working...",
    liveLink: "",
    githubLink: "https://github.com/tehseen01/muhammad-portfolio",
  },
  {
    id: 2,
    name: "Shopping app",
    time: "July - 2023",
    liveLink: "https://dev-shopp.vercel.app",
    githubLink: "https://github.com/tehseen01/nextjs-shopping-app",
  },
  {
    id: 3,
    name: "Instagram clone",
    time: "May - 2023",
    liveLink: "https://instagram-clone-tehseen01.vercel.app/",
    githubLink: "https://github.com/tehseen01/instagram-clone",
  },
];
