class ExperienceDetail {
  organisation!: string;
  role!: string;
  period!: string;
  headline!: string;
  description!: string;
}

const experienceData: ExperienceDetail[] = [
  {
    organisation: "PAYPAL",
    role: "Software Engineer Intern",
    period: "AUG 2023 - DEC 2023",
    headline: `I contributed to product compliance with financial regulations as part of the PayPal Compliance Process team.`,
    description: `I supported the consolidation and enhancement of metrics collection and visualization, thereby enabling the
      incident response team to operate through a single platform.`,
  },
  {
    organisation: "AUTODESK",
    role: "Software Engineer Intern",
    period: "JAN 2023 - JUN 2023",
    headline: `I built new internal tools as part of the Autodesk database team.`,
    description: `These tools include an automated database
      tuning for AWS RDS MySQL databases built upon reinforcement learning, a centralized API for dynamic API rate limit management and a custom
      Go application to automate code review processes.`,
  },
  {
    organisation: "ZENDESK",
    role: "Software Engineering Intern",
    period: "FEB 2022 - AUG 2022",
    headline: `I improved OAuth2 data security as part of the Zendesk Chat backend team.`,
    description: `The project involved the hashing and
      migration of OAuth2 data at rest for more than 200,000 clients with 0 API downtime. Other ad-hoc tasks
      included employing MySQL database locks to prevent concurrent API request race conditions and triaging
      production API requests via Datadog metrics and logs.`,
  },
  {
    organisation: "TRUEVA CAPITAL",
    role: "Data Engineer Intern",
    period: "MAY 2021 - FEB 2022",
    headline: `I built data pipelines and APIs for Medtrik, a data analytics product, to help dental clinics optimise
      their operations.`,
    description: `I designed, proposed and implemented the end-to-end Python ETL data
      pipeline and architecture, which reduced the minimum viable product (MVP) runtime from 40 minutes to
      5 minutes. Other duties included configuring and deploying various Linux virtual machines on DigitalOcean
      and Google Cloud Platform for remote MySQL database management and continuous data pipeline.`,
  },
];

export { ExperienceDetail, experienceData };
