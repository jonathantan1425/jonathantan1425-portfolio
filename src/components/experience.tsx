import { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { experienceData, ExperienceDetail } from "../data/experiences";

const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsItalic = Poppins({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
});

function renderExperience() {
  const organisationClass = `${poppinsBody.className} text-smoke-50 text-size-header bg-turquoise-950 uppercase`;
  const roleClass = `${poppinsBody.className} text-smoke-950 text-size-subtitle uppercase`;
  const periodClass = `${poppinsBody.className} text-smoke-600 text-size-subtitle uppercase`;
  const headlineClass = `${poppinsItalic.className} text-smoke-950 text-size-body`;
  const descriptionClass = `${poppinsBody.className} text-smoke-600 text-size-body`;

  return experienceData.map((experience: ExperienceDetail, index: number) => {
    return (
      <div key={index} className="px-5 py-5 xl:py-10 space-y-4 w-full">
        <div className="flex items-center space-x-5">
          <div className={organisationClass}>
            <div className="px-2 py-1">{experience.organisation}</div>
          </div>
          <div className="pr-8">
            <div className={roleClass}>{experience.role}</div>
            <div className={periodClass}>{experience.period}</div>
          </div>
        </div>
        <div className="text-justify space-y-2 2xl:max-w-[70%]">
          <div className={headlineClass}>{experience.headline}</div>
          <div className={descriptionClass}>{experience.description}</div>
        </div>
      </div>
    );
  });
}

const ExperienceHeader = () => {
  const headerText = "EXPERIENCE";

  const headerComponent = (
    <h2
      className={
        poppinsMedium.className +
        " text-center whitespace-nowrap text-smoke-50 text-size-subtitle"
      }
    >
      {headerText}
    </h2>
  );

  return <div className="flex space-x-8">{headerComponent}</div>;
};

export default function Experience() {
  return (
    <div id="experience" className="section pb-16 space-y-2">
      <div className="px-4 py-16 bg-turquoise-950">
        <ExperienceHeader />
        <p
          className={
            poppins.className +
            " py-4 text-smoke-300 text-size-header"
          }
        >
          I focus on developing <span className="text-smoke-50">efficient</span>{" "}
          and <span className="text-smoke-50">well-documented</span> solutions,
          with a budding interest in the{" "}
          <span className="text-smoke-50">payments ecosystem</span>.
        </p>
      </div>
      {renderExperience()}
    </div>
  );
}
