class ExperienceDetail {
  organisation!: string;
  role!: string;
  period!: string;
  headline!: string;
  descriptions!: string[];
}

const experienceData: ExperienceDetail[] = [
  {
    organisation: "PAYPAL",
    role: "Software Engineer Intern",
    period: "AUG 2023 - DEC 2023",
    headline:
      "I contributed to product compliance with financial regulations as part of the PayPal Compliance team.",
    descriptions: ["Built ABC"],
  },
  {
    organisation: "AUTODESK",
    role: "Software Engineer Intern",
    period: "JAN 2023 - JUN 2023",
    headline:
      "I built new internal tools for API rate limits and automated database tuning as part of the Autodesk database team.",
    descriptions: ["Built ABC"],
  },
  {
    organisation: "ZENDESK",
    role: "Software Engineering Intern",
    period: "FEB 2022 - AUG 2022",
    headline:
      "I improved OAuth2 data security as part of the Zendesk Chat backend team.",
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
      "I built data pipelines and APIs for a data analytics product to help dental clinics optimise their operations.",
    descriptions: [
      "Designed, proposed, and implemented Python ETL data pipeline and architecture to derive business insights for dental clinics, improving the minimum viable product (MVP) runtime from 40 minutes to 5 minutes",
      "Configured and deployed Linux virtual machines on DigitalOcean and Google Cloud Platform for remote MySQL database management and continuous data pipeline",
      "Configured Infrastructure as Code (IaC) for data warehouses and local and virtual machine environments",
      "Deployed secured Jupyter-Lab server for real-time collaborative machine learning development",
      "Tuned Scikit-Learn machine learning models with remote data version control to optimize client performance",
    ],
  },
];

export { ExperienceDetail, experienceData };
