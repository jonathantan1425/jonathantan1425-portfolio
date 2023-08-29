"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import Tag from "../../../components/tag";
import { projectData, ProjectDetail } from "../../../data/projects";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsItalic = Poppins({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
});
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const headerClass =
  poppinsMedium.className +
  " whitespace-nowrap text-smoke-50 text-size-subtitle";

const titleClass = `${poppinsBody.className} px-2 py-1 text-smoke-50 bg-turquoise-950 text-size-header`;
const achievementClass = `${poppinsItalic.className} text-smoke-950 text-size-subheader`;
const contextClass = `${poppinsBody.className} text-smoke-600 text-size-subtitle`;
const descriptionClass = `${poppinsBody.className} text-smoke-800 text-size-body`;
const sectionClass = `${poppinsBody.className} text-smoke-300 text-size-subtitle`;

function renderProjectIndicator(currentCard: number) {
  const baseClass = "w-4 h-4 transition duration-500 ease-in-out";
  const indicatorClass =
    baseClass + " bg-smoke-200 hover:bg-turquoise-950 hover:cursor-pointer";
  const activeIndicatorClass =
    baseClass + " bg-turquoise-950 disabled:cursor-default";

  return projectData.map((project: ProjectDetail, index: number) => {
    if (index === currentCard) {
      return (
        <Link
          key={index}
          className={activeIndicatorClass}
          href={`/project/${project.id}`}
        ></Link>
      );
    } else {
      return (
        <Link
          key={index}
          className={indicatorClass}
          href={`/project/${project.id}`}
        ></Link>
      );
    }
  });
}

function renderProject(projectId: string) {
  const project = projectData.find(
    (project: ProjectDetail) => project.id === projectId
  );

  if (!project) {
    return <></>;
  }

  return (
    <div className="flex flex-col w-full space-y-2">
      <Image
        src={project.image}
        alt={project.title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto max-h-[50vh] object-cover object-middle aspect-video"
        priority={true}
      />
      <div className="flex flex-col space-y-5">
        <div className="flex">
          <h2 className={titleClass}>{project.title}</h2>
        </div>
        <div>
          <h4 className={sectionClass}>Achievement</h4>
          <h3 className={achievementClass}>{project.achievement}</h3>
          <h4 className={contextClass}>{project.context}</h4>
        </div>
        <div>
          <h4 className={sectionClass}>Links</h4>
          {project.weblinks.map((weblink, index) => {
            return (
              <Link
                key={index}
                href={weblink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise-950 text-size-body uppercase border-b-2 border-smoke-50 hover:border-turquoise-950 transition duration-500"
              >
                {weblink.site}
                <ArrowUpRightIcon className="w-4 h-4 inline-block" />
              </Link>
            );
          })}
        </div>
        <div>
          <h4 className={sectionClass}>Technologies</h4>
          {project.techStack.map((tech: string, index: number) => {
            return <Tag key={index} text={tech} />;
          })}
        </div>
        <div>
          <h4 className={sectionClass}>Project Description</h4>
          <p className={descriptionClass}>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { title: string } }) {
  const title = params.title;
  const currentProjectIndex = projectData.findIndex(
    (project) => project.id === title
  );

  return (
    <div className="bg-smoke-50 p-5 min-h-[88vh] lg:min-h-[84vh] flex flex-col space-y-10">
      <div className="flex justify-between items-center">
        <div className={`px-2 bg-turquoise-950 ${headerClass}`}>PROJECT</div>
        <div className="flex gap-x-10 justify-center">
          {renderProjectIndicator(currentProjectIndex)}
        </div>
      </div>
      <div className="flex space-x-20">{renderProject(title)}</div>
      <div className="flex gap-x-10 justify-center"></div>
    </div>
  );
}
