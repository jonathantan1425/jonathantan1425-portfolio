"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { projectData, ProjectDetail } from "../data/projects";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const headerClass =
  poppinsBody.className + " text-right text-turquoise-950 text-size-header";
const subheaderClass =
  poppinsBody.className + " text-turquoise-950 text-size-subtitle";
const titleClass =
  poppinsBold.className +
  " text-turquoise-950 text-size-subheader whitespace-pre-wrap";

function RenderProjectCards() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function renderText(
    subheader: string,
    title: string,
    activeIndex: number,
    prevIndex: number
  ) {
    return (
      <div
        className={`z-20 transition duration-500 absolute bottom-0 p-4 ${
          currentTextIndex === activeIndex ? "opacity-100" : "opacity-0"
        } ${
          currentTextIndex === activeIndex
            ? "translate-y-0"
            : currentTextIndex === prevIndex
            ? "translate-y-2"
            : "-translate-y-2"
        }`}
      >
        <p className={subheaderClass}>{subheader}</p>
        <h4 className={titleClass}>{title}</h4>
      </div>
    );
  }

  return projectData.map((projectCard: ProjectDetail, index: number) => {
    return (
      <Link
        key={index}
        className="aspect-video w-full group hover:scale-105 transition duration-500"
        href={`/project/${projectCard.id}`}
      >
        <div className="relative w-full h-full">
          {renderText("Project", projectCard.title, 0, 2)}
          {renderText("Achieved", projectCard.achievement, 1, 0)}
          {renderText(
            "Built For",
            projectCard.context.replace(", ", ",\n"),
            2,
            1
          )}
          <div className="z-10 absolute w-full h-full bg-gradient-to-t from-smoke-50" />
          <Image
            src={projectCard.image}
            alt={projectCard.title}
            fill
            className="absolute object-cover"
          />
        </div>
      </Link>
    );
  });
}

export default function Projects() {
  return (
    <div id="projects" className="section px-5 py-16 flex flex-col space-y-5">
      <div className={headerClass}>PROJECTS</div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 relative w-full">
        {RenderProjectCards()}
      </div>
    </div>
  );
}
