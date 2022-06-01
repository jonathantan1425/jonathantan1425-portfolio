import React, { useState } from "react";
import Link from "next/link";
import EXPERIENCES from "./data";

export default function ExperienceCards() {
  const [openTab, setOpenTab] = React.useState(EXPERIENCES[0].id);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            {EXPERIENCES.map((experience) => {
              return (
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={experience.id}>
                  <a
                    className={
                      "text-sm font-bold uppercase px-5 py-3 block leading-normal " +
                      (openTab === experience.id
                        ? "text-white bg-green dark:bg-mint dark:text-dark_gray"
                        : "text-dark_gray dark:text-mint")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(experience.id);
                    }}
                    data-toggle="tab"
                    href={experience.id}
                    role="tablist"
                  >
                    {experience.company}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-5 py-5 flex-auto">
              <div className="tab-content tab-space">
                {EXPERIENCES.map((experience) => {
                  return (
                    <div className={openTab === experience.id ? "block" : "hidden"} key={experience.id}>
                      <ul className="space-y-10">
                        <div>
                          <div className="flex gap-3">
                            <p className="font-semibold text-2xl">
                              {experience.position}
                            </p>
                            <p className="font-semibold text-green text-2xl dark:text-mint">
                              //
                            </p>
                            <p className="font-semibold text-green text-2xl dark:text-mint">
                              {experience.company}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-xl text-dark_gray dark:text-light_gray">
                              {experience.start_date} - {experience.end_date}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-md text-charcoal">
                            {experience.about}
                          </p>
                          <ul className="list-disc px-5 my-5 space-y-3">
                            {experience.description.map((line) => {
                              return (
                                <li key={line.line} className="font-thin">
                                  {line.value}
                                </li>
                              )})}
                          </ul>
                        </div>
                      </ul>
                    </div>
                  )})
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
