import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PROJECTS from "./data";
import ICONS from "./icons";

export default function ProjectCards() {
  const renderTechStacks = (techStack) => {
    return (
      <div className="flex gap-x-7 flex-grow w-full flex-wrap">
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
        className="flex-none w-full sm:w-2/3 snap-center"
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
            <h3 className="text-3xl sm:text-4xl mb-2 text-green dark:text-mint">
              {project.projectName}
            </h3>
            <p className="text-md">
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
    className="container-snap flex flex-row flex-no-wrap overflow-x-scroll scrolling-touch snap-mandatory snap-x space-x-10 sm:col-span-3"
    >
      {renderProjectCards}
    </div>
  );
}