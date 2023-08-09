import LocalFont from "next/font/local";

export const markSimonson = LocalFont({
  src: [
    {
      path: "./mark-simonson-regular.woff2",
      weight: "400",
    },
    {
      path: "./mark-simonson-bold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
});

export const avantGarde = LocalFont({
  src: [
    {
      path: "./avant-garde.woff2",
    },
  ],
  display: "swap",
});
