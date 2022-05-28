import React from "react";
import Link from "next/link";
import PROJECTS from "./data";
import ICONS from "./icons";

export default function ProjectCards() {
  const TechStackIcons = (techStack) => {
    return (
      <div className="flex gap-x-7">
        {techStack.map((framework) => {
          return (
            <p className="font-light font-mono text-sm align-middle text-left text-dark_gray">
              {framework.toUpperCase()}
            </p>
          )})}
      </div>
    )
  }

  const WeblinkIcons = (weblinks) => {
    return (
      <div>
        {Object.keys(weblinks).map((weblink) => {
          return (
            <div>
              <Link href={weblinks[weblink]}>
                <button>
                  {ICONS[weblink]}
                </button>
              </Link>
            </div>
          )})}
      </div>
    )
  }

  const renderProjectCards = PROJECTS.map((project) => {
    return (
      <div
        className="flex-none w-1/2 mr-8 md:pb-4 gap-10"
      >
        <div className="aspect-video overflow-hidden">
          <img
            className="object-cover hover:shadow-xl hover:scale-110 duration-300"
            src={project.image}
            alt={project.projectName}
          />
        </div>
        <div className="py-2">
          <div className="space-y-1">
            <p className="font-light text-sm">
              {project.projectOutcome.toUpperCase()}
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl mb-2">
              {project.projectName}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="">
              {project.about}
            </p>
            {TechStackIcons(project.techStack)}
            {WeblinkIcons(project.weblinks)}
          </div>
        </div>
      </div>
    )
  });

  return (
    <div
    id="scrollContainer"
    className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
    >
      {renderProjectCards}
    </div>
  );
}