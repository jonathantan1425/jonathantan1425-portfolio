"use client";

import { useEffect, useState, useRef } from "react";
import { Poppins } from "next/font/google";

const poppins_bold = Poppins({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const texts = ["COFFEE FUELED", "BAUHAUS CENTRIC", "SOFTWARE ENGINEER"];

const subtitleClass = "text-smoke-200 text-size-subheader";

function renderText(activeIndex: number) {
  return texts.map((text, index) => {
    const isActive = index === activeIndex;

    const textClass = `${poppins_bold.className} ${
      isActive ? "text-turquoise-400" : "text-smoke-50"
    } transition ease-in-out duration-500 font-outline-turquoise-400 text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`;

    return (
      <div key={index} className={textClass}>
        {text}
      </div>
    );
  });
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = texts.length - 1;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight / texts.length / 2;

      const isContainerInView = scrollPosition + sectionHeight >= windowHeight;

      if (isContainerInView) {
        const newIndex = Math.min(
          Math.floor(
            (scrollPosition + sectionHeight - windowHeight) / sectionHeight
          ),
          sections
        );

        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-[100vh] items-center justify-center space-x-20 px-20">
      <div ref={containerRef} className="max-w-7xl">
        <h2 className={subtitleClass}>I am a</h2>
        {renderText(activeIndex)}
        <p className={`mt-5 ${poppins.className} text-justify text-smoke-600 text-size-body`}>
          I'm a final year undergraduate in Business Management and Information
          Systems at Singapore Management University. I build data and backend
          applications alongside my trusty iced Caffè latte. Advocate of form
          follows function, I aspire to write and design clean code that is both
          functional and beautiful. Feel free to drop me a message or browse my
          projects! Always happy to chat.
        </p>
      </div>
    </div>
  );
}
