"use client";

import React, { useEffect, useRef } from "react";
import Rellax from "rellax";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  const rellaxRef = useRef<Rellax | null>(null);

  useEffect(() => {
    const RellaxInstance =
      typeof window !== "undefined" ? require("rellax") : null;

    if (RellaxInstance) {
      rellaxRef.current = new Rellax(".rellax");
    }

    return () => {
      if (rellaxRef.current) {
        rellaxRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
