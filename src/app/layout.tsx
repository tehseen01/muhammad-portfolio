import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/components/Provider";
import { avantGarde } from "./fonts";

export const metadata: Metadata = {
  title: "Muhammad Tehseen | Frontend Developer",
  description:
    "I’m a selectively skilled frontend developer with strong focus on producing high quality & impactful digital experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(avantGarde.className, "bg-black/95 text-white")}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
