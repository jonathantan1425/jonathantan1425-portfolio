const EXPERIENCES = [
  {
    id: "zendesk_intern",
    company: "Zendesk",
    position: "Software Engineering Intern",
    start_date: "Feb 2022",
    end_date: "Aug 2022",
    about: "I worked in the Zendesk Chat backend team to improve product reliability and scalability",
    description: [
      {line: 1, value: "Hashed OAuth2 data at rest to improve data security for more than 200,000 clients, with 0 API downtime"},
      {line: 2, value: "Employed MySQL database locks to prevent race conditions between concurrent API requests, improving reliability"},
      {line: 3, value: "Triaged and monitored production API requests using Datadog metrics and logs"},
    ],
  },
  {
    id: "trueva_intern",
    company: "TrueVA Capital",
    position: "Data Engineer Intern",
    start_date: "May 2021",
    end_date: "Feb 2022",
    about: "I built data pipelines and APIs for a data analytics product to help dental clinics improve their operations",
    description: [
      {line: 1, value: "Designed, proposed, and implemented Python ETL data pipeline and architecture to derive business insights for dental clinics, improving the minimum viable product (MVP) runtime from 40 minutes to 5 minutes"},
      {line: 2, value: "Configured and deployed Linux virtual machines on DigitalOcean and Google Cloud Platform for remote MySQL database management and continuous data pipeline"},
      {line: 3, value: "Configured Infrastructure as Code (IaC) for data warehouses and local and virtual machine environments"},
      {line: 4, value: "Deployed secured Jupyter-Lab server for real-time collaborative machine learning development"},
      {line: 5, value: "Tuned Scikit-Learn machine learning models with remote data version control to optimize client performance"},
    ],
  }
];

export default EXPERIENCES;