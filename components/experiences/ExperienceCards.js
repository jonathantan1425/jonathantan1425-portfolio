import React, { useState } from "react";
import Link from "next/link";
import EXPERIENCES from "./data";

export default function ExperienceCards() {
  const renderJobCard = (company, job) => {
    return (
      <>
        <div className="flex gap-5">
          <p className="text-semibold">
            {job.position}
          </p>
          <p className="text-semibold text-middle_blue">
            //
          </p>
          <p className="text-semibold text-middle_blue">
            {company}
          </p>
        </div>
        <p>{job.start_date} - {job.end_date}</p>
          <ul>
            {job.description.map((line) => {
              return (
                <li>
                  {line}
                </li>
              )})}
          </ul>
      </>
    )
  };

  const renderCompanyCard = (company, companyData) => {
    const companyTab = "tabs-" + company.replace(/ /g, '');
    const companyAriaLabel = "tabs-" + company.replace(/ /g, '') + "-tab";

    return (
      <div className="tab-pane fade" id={companyTab} role="tabpanel" aria-labelledby={companyAriaLabel}>
        {companyData.map((job) => {
          return (
            <>
              {renderJobCard(company, job)}
            </>
          )
        })}
      </div>
    )
  };

  const renderCompanyTabs = () => {
    const companySection = "#" + company.replace(/ /g, '');
    const companyTab = "tabs-" + company.replace(/ /g, '') + "-tab";
    const companyTarget = "#tabs-" + company.replace(/ /g, '');
    const companyAriaControls = "tabs-" + company.replace(/ /g, '');
    console.log(companyAriaControls)
    return (
      <>
        {EXPERIENCES.map((experience) => {
          return (
            <li className="nav-item" role="presentation">
              <a href={companySection} className="
              nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent" 
              id={companyTab} data-bs-toggle="pill" data-bs-target={companyTarget} role="tab" aria-controls={companyAriaControls}
              aria-selected="false">
                {company}
              </a>
            </li>
          )
        })}
      </>
    )
  };

  return (
    <>
      <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
      role="tablist">
        {Object.keys(EXPERIENCES).map((company) => {
          return (
            <>{renderCompanyTab(company)}</>
            )
          })}
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        {Object.keys(EXPERIENCES).map((company) => {
            return (
              <>
                {renderCompanyCard(company, EXPERIENCES[company])}
              </>
              )
            })}
      </div>
    </>
  );
}
