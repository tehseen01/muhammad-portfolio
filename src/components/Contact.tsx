"use client";

import { markSimonson } from "@/app/fonts";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useCircleVariant } from "./CircleSizeProvider";

const Contact = ({ isRedLayer }: { isRedLayer: boolean }) => {
  const linkClass = `relative before:absolute before:scale-y-0 before:transition before:-z-[1] hover:before:scale-y-100 hover:text-black/90 before:inset-0 before:w-full before:h-full before:bg-orange-red `;

  const { setVariant } = useCircleVariant();

  return (
    <>
      <div
        id="contact"
        className={clsx(
          isRedLayer
            ? ""
            : "bg-[url(../../public/asthetic.jpg)] before:absolute",
          "sm:h-[100vh] h-[50vh] relative bg-no-repeat bg-cover bg-center bg-fixed before:inset-0 before:bg-black/30 flex items-center justify-center uppercase sm:px-20 px-4 before:z-0"
        )}
      >
        <p
          className={clsx(
            isRedLayer ? "text-black/90" : "text-redis-gray",
            "sm:text-8xl text-5xl tracking-tighter z-[1] w-2/3 m-auto text-center"
          )}
        >
          Have an{" "}
          <span className={clsx(isRedLayer ? "" : "text-orange-red")}>
            idea
          </span>{" "}
          let&#39;s discuss
        </p>
      </div>
      <footer
        className={clsx(
          isRedLayer ? "text-black/90" : "text-redis-gray",
          "md:w-[80%] m-auto w-[90%] py-20"
        )}
      >
        <h3
          className={clsx(
            markSimonson.className,
            isRedLayer ? "text-black/90" : "text-redis-gray",
            "uppercase mb-4  tracking-wide"
          )}
        >
          connect
        </h3>
        <div
          className="pt-4 sm:grid grid-cols-3 sm:gap-2"
          onMouseEnter={() => setVariant("none")}
          onMouseLeave={() => setVariant("default")}
        >
          <div className={clsx(isRedLayer ? "" : "z-10", "flex flex-col")}>
            <Link
              href={"https://www.linkedin.com/in/mohd-tehseen-962635271"}
              target="_blank"
              className={clsx(
                linkClass,
                "text-3xl tracking-tight leading-none "
              )}
            >
              <span className="w-2 h-2 bg-orange-red inline-block mr-2"></span>
              <span>Linkedin</span>
            </Link>
            <Link
              href={"https://github.com/tehseen01"}
              target="_blank"
              className={clsx(
                linkClass,
                "text-3xl tracking-tight leading-none "
              )}
            >
              <span className="w-2 h-2 bg-orange-red inline-block mr-2"></span>
              Github
            </Link>
            <Link
              href={"https://instagram.com/tehseen.01"}
              target="_blank"
              className={clsx(
                linkClass,
                "text-3xl tracking-tight leading-none "
              )}
            >
              <span className="w-2 h-2 bg-orange-red inline-block mr-2"></span>
              Instagram
            </Link>
          </div>
          <div className={clsx(isRedLayer ? "" : "z-10", "flex flex-col")}>
            <Link
              href={"https://twitter.com/tehseen_type"}
              target="_blank"
              className={clsx(
                linkClass,
                "text-3xl tracking-tight leading-none "
              )}
            >
              <span className="w-2 h-2 bg-orange-red inline-block mr-2"></span>
              Twitter
            </Link>

            <Link
              href={"https://www.threads.net/@tehseen.01"}
              target="_blank"
              className={clsx(
                linkClass,
                "text-3xl tracking-tight leading-none "
              )}
            >
              <span className="w-2 h-2 bg-orange-red inline-block mr-2"></span>
              Threads
            </Link>
          </div>
          <div
            className={clsx(
              isRedLayer ? "" : "z-10",
              "flex flex-col gap-2 max-sm:pt-4"
            )}
          >
            <div className={clsx(linkClass, "flex flex-col")}>
              <span className="uppercase">email</span>
              <a
                href={"mailto:tehseen.type@gmail.com"}
                // target="_blank"
                className="text-xs opacity-60"
              >
                tehseen.type@gmail.com
              </a>
            </div>
            <div className={clsx(linkClass, "flex flex-col")}>
              <span className="uppercase">phone</span>
              <div className="text-xs opacity-60">+91 952 839 1901</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
