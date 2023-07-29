import { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppinsBlack = Poppins({ subsets: ["latin"], weight: "900" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsItalic = Poppins({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const experiences = [
  {
    organisation: "PAYPAL",
    role: "Software Engineer Intern",
    period: "AUG 2023 - PRESENT",
    headline:
      "I worked in the Paypal Compliance team to ensure product compliance with financial regulations",
    descriptions: ["Built ABC"],
  },
  {
    organisation: "AUTODESK",
    role: "Software Engineer Intern",
    period: "JAN 2023 - JUN 2023",
    headline:
      "I worked in the Autodesk database team to build new internal tools for service owners",
    descriptions: ["Built ABC"],
  },
  {
    organisation: "ZENDESK",
    role: "Software Engineering Intern",
    period: "FEB 2022 - AUG 2022",
    headline:
      "I worked in the Zendesk Chat backend team to improve product reliability and scalability",
    descriptions: [
      "Hashed OAuth2 data at rest to improve data security for more than 200,000 clients, with 0 API downtime",
      "Employed MySQL database locks to prevent race conditions between concurrent API requests, improving reliability",
      "Triaged and monitored production API requests using Datadog metrics and logs",
    ],
  },
  {
    organisation: "TRUEVA CAPITAL",
    role: "Data Engineer Intern",
    period: "MAY 2021 - FEB 2022",
    headline:
      "I built data pipelines and APIs for a data analytics product to help dental clinics improve their operations",
    descriptions: [
      "Designed, proposed, and implemented Python ETL data pipeline and architecture to derive business insights for dental clinics, improving the minimum viable product (MVP) runtime from 40 minutes to 5 minutes",
      "Configured and deployed Linux virtual machines on DigitalOcean and Google Cloud Platform for remote MySQL database management and continuous data pipeline",
      "Configured Infrastructure as Code (IaC) for data warehouses and local and virtual machine environments",
      "Deployed secured Jupyter-Lab server for real-time collaborative machine learning development",
      "Tuned Scikit-Learn machine learning models with remote data version control to optimize client performance",
    ],
  },
];

function renderExperience() {
  const organisationClass = `${poppinsBold.className} text-turquoise-950 text-size-header`;
  const roleClass = `${poppinsBold.className} text-smoke-800 text-size-subheader`;
  const periodClass = `${poppinsBody.className} text-smoke-600 text-size-subheader`;
  const headlineClass = `${poppinsBody.className} text-smoke-800 text-justify text-size-body`;

  return experiences.map((experience, index) => {
    return (
      <div key={index} className="py-10 group">
        <div className="lg:grid lg:grid-cols-5 items-center">
          <div className="col-span-2 pr-8">
            <div className={organisationClass}>{experience.organisation}</div>
          </div>
          <div className="text-left col-span-3">
            <div className={roleClass}>{experience.role}</div>
            <div className={periodClass}>{experience.period}</div>
            <div className={headlineClass}>{experience.headline}</div>
          </div>
        </div>
      </div>
    );
  });
}

export default function Experience() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [containerPosition, setContainerPosition] = useState("relative");

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const maxFontSize = Math.min(Math.round(windowHeight / 1.5), 1024);
  const minFontSize = Math.min(Math.round(windowHeight / 6), windowWidth / 10);

  useEffect(() => {
    const handleScroll = () => {
      const containerOffsetTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isInView =
        scrollY >= containerOffsetTop + 20 &&
        scrollY <= containerOffsetTop + containerHeight;
      setIsInView(isInView);
      setScrollPosition(scrollY - containerOffsetTop - 20);

      const isAtBottom =
        scrollY >= containerOffsetTop + containerHeight;
      setIsAtBottom(isAtBottom);
      setContainerPosition(isInView ? "fixed" : "relative");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateFontSize = () => {
    if (isInView) {
      const fontSize = Math.floor(maxFontSize - scrollPosition);
      return Math.max(minFontSize, fontSize);
    }
    return isAtBottom ? minFontSize : maxFontSize;
  };

  const fontSize = calculateFontSize();

  const experienceHeader = () => {
    const baseHeaderClass =
      poppinsBlack.className + " text-center whitespace-nowrap";

    const mainHeaderClass = baseHeaderClass + " text-turquoise-950";
    const sideHeaderClass =
      baseHeaderClass + " text-turquoise-200 font-outline-turquoise-950";

    const headerText = "EXPERIENCE";
    return (
      <div className="flex justify-center space-x-8">
        <h2
          className={sideHeaderClass}
          style={{
            fontSize: `${fontSize}px`,
          }}
          ref={textRef}
        >
          {headerText}
        </h2>
        <h2
          className={`${mainHeaderClass}`}
          style={{
            fontSize: `${fontSize}px`,
          }}
          ref={textRef}
        >
          {headerText}
        </h2>
        <h2
          className={sideHeaderClass}
          style={{
            fontSize: `${fontSize}px`,
          }}
          ref={textRef}
        >
          {headerText}
        </h2>
      </div>
    );
  };

  return (
    <div
      className="bg-turquoise-200 h-[250vh] flex justify-center relative"
      ref={containerRef}
    >
      <div
        style={{
          position: containerPosition,
          top: isAtBottom ? "auto" : "20px",
          // bottom: isAtBottom ? "0" : "auto",
        }}
        className="flex flex-col items-center w-full"
      >
        {experienceHeader()}
        <div
          className={`flex flex-col divide-y max-w-7xl px-10 ${
            isAtBottom ? "pb-20" : ""
          } no-scrollbar overflow-y-scroll ${
            fontSize === minFontSize ? "" : "pointer-events-none"
          }`}
        >
          {renderExperience()}
        </div>
      </div>
    </div>
  );
}
