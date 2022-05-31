import React, { useState } from "react";
import Link from "next/link";
import EXPERIENCES from "./data";

export default function ExperienceCards() {
  const [openTab, setOpenTab] = React.useState(EXPERIENCES[0].id);
//   const renderJobCard = (job) => {
//     return (
//       <>
//         <div className="flex gap-5">
//           <p className="text-semibold">
//             {job.position}
//           </p>
//           <p className="text-semibold text-middle_blue">
//             &#47&#47
//           </p>
//           <p className="text-semibold text-middle_blue">
//             {company}
//           </p>
//         </div>
//         <p>{job.start_date} - {job.end_date}</p>
//           <ul>
//             {job.description.map((line) => {
//               return (
//                 <li key={line.id}>
//                   {line.value}
//                 </li>
//               )})}
//           </ul>
//       </>
//     )
//   };

  // const renderCompanyCard = (company, companyData) => {
  //   const companyTab = "tabs-" + company.replace(/ /g, '');
  //   const companyAriaLabel = "tabs-" + company.replace(/ /g, '') + "-tab";

  //   return (
  //     <div className="tab-pane fade" id={companyTab} role="tabpanel" aria-labelledby={companyAriaLabel}>
  //       {companyData.map((job) => {
  //         return (
  //           <>
  //             {renderJobCard(company, job)}
  //           </>
  //         )
  //       })}
  //     </div>
  //   )
  // };

  // const renderCompanyTabs = () => {
  //   const [openTab, setOpenTab] = React.useState(1);
  //   console.log(companyAriaControls)
  //   var count = 0;
  //   return (
  //     <>
  //       {EXPERIENCES.map((experience) => {
  //         count++;
  //         const href = "#link" + count;
  //         console.log(href);
  //         return (
  //           <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
  //             <a
  //               className={
  //                 "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
  //                 (openTab === 1
  //                   ? "text-white bg-black-600"
  //                   : "text-black-600 bg-white")
  //               }
  //               onClick={e => {
  //                 e.preventDefault();
  //                 setOpenTab(1);
  //               }}
  //               data-toggle="tab"
  //               href="#link1"
  //               role="tablist"
  //             >
  //               {experience.company}
  //             </a>
  //           </li>
  //         )
  //       })}
  //     </>
  //   )
  // };

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
                      "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                      (openTab === experience.id
                        ? "text-white bg-green"
                        : "text-dark_gray")
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
                      <ul className="">
                        <div className="flex gap-3">
                          <p className="font-semibold text-lg">
                            {experience.position}
                          </p>
                          <p className="font-semibold text-green text-lg">
                            //
                          </p>
                          <p className="font-semibold text-green text-lg">
                            {experience.company}
                          </p>
                        </div>
                        <p className="font-mono">
                          {experience.start_date} - {experience.end_date}
                        </p>
                        <p className="text-md text-charcoal">
                          {experience.about}
                        </p>
                        <ul className="list-disc px-5 my-5 space-y-3">
                          {experience.description.map((line) => {
                            return (
                              <li key={line.line}>
                                {line.value}
                              </li>
                            )})}
                        </ul>
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
