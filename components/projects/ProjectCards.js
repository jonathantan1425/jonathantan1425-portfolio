import React, { useEffect, useState, Component } from "react";
import Link from "next/link";
import PROJECTS from "./data";
import ICONS from "./icons";

export default function ProjectCards() {
  const renderTechStacks = (techStack) => {
    return (
      <div className="flex gap-x-7 flex-grow w-full flex-wrap justify-center">
        {techStack.map((framework) => {
          return (
            <p className="font-light font-mono text-sm align-middle text-left text-light_gray" key={framework.stack}>
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

  const renderProjectCards = PROJECTS.map((project, index) => {
    return (
      <div className={
        index === 0
          ? "carousel-item active relative float-left w-full"
          : "carousel-item relative float-left w-full"
      }>
        <img
            src={project.image}
            className="block w-full"
            alt="..."
          />
        <div className="carousel-caption hidden absolute bottom-0 left-0 w-full h-1/2 items-end sm:block text-center bg-gradient-to-t from-black">
          <div className="absolute bottom-0 left-0 right-0 mb-9">
            <p className="font-light text-sm">
              {project.projectOutcome.toUpperCase()}
            </p>
            <h3 className="text-3xl sm:text-4xl mb-2 text-white">
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

  const renderCarousellButtons = PROJECTS.map((project, index) => {
    return (
      <button
        type="button"
        data-bs-target="#projectCarousel"
        data-bs-slide-to={index}
        className={
          index === 0
          ? "active"
          : ""
        }
        aria-current={
          index === 0
          ? "true"
          : "false"
        }
        aria-label={
          "Project " + index
        }
      >
      </button>
    )
  })

  return (
    <div
    id="projectCarousel"
    className="carousel slide relative"
    data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {renderCarousellButtons}
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        {renderProjectCards}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#projectCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#projectCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}