"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="">
      <Header isRedLayer={false} />
      <Hero isRedLayer={false} />
      <About isRedLayer={false} />
      <Work isRedLayer={false} />
      <Contact isRedLayer={false} />
    </div>
  );
}
