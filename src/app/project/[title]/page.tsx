"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import Tag from "../../../components/tag";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsItalic = Poppins({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
});
const poppinsRegular = Poppins({ subsets: ["latin"], weight: "400" });

const headerClass =
  poppinsBold.className + " text-right text-smoke-200 text-[128px]";

const projectCards = [
  {
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

function renderProjectCards(currentCard: number) {
  const titleClass = `${poppinsBold.className} text-turquoise-950 text-[64px]`;
  const achievementClass = `${poppinsItalic.className} text-turquoise-950 text-[32px]`;
  const contextClass = `${poppinsRegular.className} text-turquoise-950 text-[24px]`;
  const descriptionClass = `${poppinsRegular.className} text-smoke-800 text-[24px]`;
  const techStackClass = `${poppinsRegular.className} text-turquoise-950 uppercase text-[18px]`;

  // return projectCards.map((projectCard, index) => {
  //   if (index > 0) {
  //     return <></>;
  //   }
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h2 className={titleClass}>{projectCards[currentCard].title}</h2>
        <h3 className={achievementClass}>
          {projectCards[currentCard].achievement}
        </h3>
        <h4 className={contextClass}>{projectCards[currentCard].context}</h4>
      </div>
      <div>
        <p className={descriptionClass}>
          {projectCards[currentCard].description}
        </p>
        {projectCards[currentCard].techStack.map((tech, index) => {
          return (
            <>
              <Tag text={tech} />
            </>
          );
        })}
      </div>
    </div>
  );
  // });
}

function renderProjectImages(currentCard: number) {
  return projectCards.map((projectCard, index) => {
    const offsetAmount = 20 * (index - currentCard);
    const zAxis = -index;
    const cardStyle = {
      left: `${offsetAmount}px`,
      bottom: `${offsetAmount}px`,
      margin: "0 auto",
      transform: "translateX(10%)",
      zIndex: `${zAxis}`,
    };

    let cardClass =
      "absolute aspect-video overflow-hidden w-4/5 shadow-xl rounded-xl transition duration-500 ease-in-out";
    if (index < currentCard) {
      return <></>;
    }
    if (index > currentCard) {
      cardClass += " grayscale saturate-50 contrast-50 blur-sm";
    }

    return (
      <div key={index} className={cardClass} style={cardStyle}>
        <Image
          src={projectCard.image}
          alt={projectCard.title}
          layout="fill"
          priority
        />
      </div>
    );
  });
}

function renderProjectIndicator(currentCard: number, clickHandler: Function) {
  const baseClass = "w-4 h-4 rounded-full transition duration-500 ease-in-out";
  const indicatorClass = baseClass + " bg-smoke-200";
  const activeIndicatorClass = baseClass + " bg-turquoise-950";

  return projectCards.map((_, index) => {
    if (index === currentCard) {
      return <button key={index} className={activeIndicatorClass}></button>;
    } else {
      return (
        <button
          onClick={() => clickHandler(index)}
          key={index}
          className={indicatorClass}
        ></button>
      );
    }
  });
}

export default function Page() {
  const [currentCard, setCurrentCard] = useState(0);

  function clickHandler(index: number) {
    setCurrentCard(index);
  }

  return (
    <div
      className="rellax bg-smoke-50 h-screen p-20 flex flex-col justify-around"
      data-rellax-speed="2"
    >
      <div className={headerClass}>PROJECTS</div>
      <div className="flex gap-x-20">
        {renderProjectCards(currentCard)}
        <div className="flex flex-col relative w-3/4 justify-end">
          {renderProjectImages(currentCard)}
        </div>
      </div>
      <div className="flex gap-x-10 justify-center">
        {renderProjectIndicator(currentCard, clickHandler)}
      </div>
    </div>
  );
}
