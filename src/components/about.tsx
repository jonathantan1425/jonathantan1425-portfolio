"use client";

import { useEffect, useState, useRef } from "react";
import { Poppins } from "next/font/google";

const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const texts = ["COFFEE FUELED", "BAUHAUS CENTRIC", "SOFTWARE ENGINEER"];
const description = `
I'm a double-degree final year undergraduate in Business Management and Information Systems
at Singapore Management University. But realistically, I'm a software engineer who loves to
build products that make people happy, and hopefully their lives better. Building something
interesting at the moment!
`;
const callToActionText =
  "Feel free to browse my projects or drop me a message! Always happy to chat.";

const subtitleClass = "text-turquoise-950 text-size-subheader";

function renderHeader(activeIndex: number) {
  return texts.map((text, index) => {
    const isActive = index === activeIndex;

    const textClass = `${poppinsMedium.className} ${
      isActive ? "text-turquoise-950" : "text-smoke-200"
    } transition ease-in-out duration-500 text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`;

    return (
      <div key={index} className={textClass}>
        {text}
      </div>
    );
  });
}

function renderText(text: string) {
  return (
    <p
      className={`mt-5 ${poppins.className} text-justify text-smoke-950 text-size-body 2xl:max-w-[70%]`}
    >
      {text}
    </p>
  );
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="about"
      className="section px-5 py-16 flex items-center justify-center"
    >
      <div ref={containerRef}>
        <h2 className={subtitleClass}>I am a</h2>
        {renderHeader(activeIndex)}
        {renderText(description)}
        {renderText(callToActionText)}
      </div>
    </div>
  );
}
