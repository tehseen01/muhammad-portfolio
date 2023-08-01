import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Provider from "@/components/Provider";

const myFont = LocalFont({
  src: [
    {
      path: "./fonts/NeuePowerTrial-Bold.woff",
      weight: "600",
    },
    {
      path: "./fonts/NeuePowerTrial-Heavy.woff",
      weight: "700",
    },
    {
      path: "./fonts/NeuePowerTrial-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/NeuePowerTrial-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/NeuePowerTrial-Ultra.woff",
      weight: "800",
    },
    {
      path: "./fonts/NeuePowerTrial-Regular.woff",
      weight: "400",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Tehseen . Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(myFont.className, "bg-black/95 text-white")}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
