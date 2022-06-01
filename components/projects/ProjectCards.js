import React from "react";
import Link from "next/link";
import Image from "next/image";
import PROJECTS from "./data";
import ICONS from "./icons";

export default function ProjectCards() {
  const renderTechStacks = (techStack) => {
    return (
      <div className="flex gap-x-7">
        {techStack.map((framework) => {
          return (
            <p className="font-light font-mono text-sm align-middle text-left text-dark_gray dark:text-light_gray" key={framework.stack}>
              {framework.value.toUpperCase()}
            </p>
          )})}
      </div>
    )
  }

  const renderWeblinkIcons = (weblinks) => {
    return (
      <div>
        {weblinks.map((weblink) => {
          return (
            <Link href={weblink.link} key={weblink.site}>
              <button>
                {ICONS[weblink.site]}
              </button>
            </Link>
          )})}
      </div>
    )
  }

  const renderProjectCards = PROJECTS.map((project) => {
    return (
      <div
        className="flex-none w-max md:w-2/3 mr-8 md:pb-4 gap-10 snap-center"
        key={project.id}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            className="object-cover hover:shadow-xl hover:scale-110 duration-300"
            src={project.image}
            alt={project.projectName}
            layout='fill'
          />
        </div>
        <div className="py-2">
          <div className="space-y-2">
            <p className="font-light text-sm">
              {project.projectOutcome.toUpperCase()}
            </p>
            <h3 className="text-4xl mb-2 text-green dark:text-mint">
              {project.projectName}
            </h3>
            <p className="">
              {project.about}
            </p>
            {renderTechStacks(project.techStack)}
            {renderWeblinkIcons(project.weblinks)}
          </div>
        </div>
      </div>
    )
  });

  return (
    <div
    id="scrollContainer"
    className="container-snap flex flex-no-wrap overflow-x-scroll scrolling-touch items-center mb-8 snap-mandatory snap-x duration-1000 2xl:first:pl-96"
    >
      {renderProjectCards}
    </div>
  );
}