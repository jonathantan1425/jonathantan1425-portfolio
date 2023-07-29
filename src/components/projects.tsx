import Image from "next/image";
import Link from 'next/link';
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const headerClass =
  poppinsBold.className + " text-right text-smoke-200 text-md xs:text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[108px] 2xl:text-[128px]";
const subheaderClass =
  poppinsBody.className + " text-turquoise-950 text-size-body";
const titleClass =
  poppinsBold.className + " text-turquoise-950 text-size-header whitespace-pre-wrap";

const projectCards = [
  {
    id: "gs-service-exchange",
    title: "GS Service Exchange",
    achievement: "1ST RUNNER UP",
    context: "Ellipsis Tech Series 2022 Hackathon, Presented by Goldman Sachs",
    description:
      "A web marketplace to provide digital banking services to Southeast Asian Fintech startups",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/image1.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
  {
    id: "gs-service-exchange",
    title: "GS Service Exchange",
    achievement: "1ST RUNNER UP",
    context: "Ellipsis Tech Series 2022 Hackathon, Presented by Goldman Sachs",
    description:
      "A web marketplace to provide digital banking services to Southeast Asian Fintech startups",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/gs-service-exchange.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
  {
    id: "gs-service-exchange",
    title: "GS Service Exchange",
    achievement: "1ST RUNNER UP",
    context: "Ellipsis Tech Series 2022 Hackathon, Presented by Goldman Sachs",
    description:
      "A web marketplace to provide digital banking services to Southeast Asian Fintech startups",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/gs-service-exchange.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
  {
    id: "gs-service-exchange",
    title: "GS Service Exchange",
    achievement: "1ST RUNNER UP",
    context: "Ellipsis Tech Series 2022 Hackathon, Presented by Goldman Sachs",
    description:
      "A web marketplace to provide digital banking services to Southeast Asian Fintech startups",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/gs-service-exchange.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
];

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
        className={`transition duration-500 absolute bottom-0 p-4 ${
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

  return projectCards.map((projectCard, index) => {
    const isActive = index === currentTextIndex;

    return (
      <Link
        key={index}
        className="rounded-xl aspect-video w-full bg-smoke-100"
        href={`/project/${projectCard.id}`}
      >
        <div className="rounded-xl relative w-full h-full">
          <Image
            src={projectCard.image}
            alt={projectCard.title}
            fill={true}
            style={{ objectFit: "contain", opacity: 0.8, borderRadius: "1rem" }}
          />
          {renderText("Project", projectCard.title, 0, 2)}
          {renderText("Achieved", projectCard.achievement, 1, 0)}
          {renderText(
            "Built For",
            projectCard.context.replace(", ", ",\n"),
            2,
            1
          )}
        </div>
      </Link>
    );
  });
}

export default function Projects() {
  return (
    <div
      className="rellax bg-smoke-50 p-20 flex flex-col"
      data-rellax-speed="2"
    >
      <div className={headerClass}>PROJECTS</div>
      <div className="grid grid-cols-1 3xl:grid-cols-2 gap-10 relative w-full">
        {RenderProjectCards()}
      </div>
    </div>
  );
}
