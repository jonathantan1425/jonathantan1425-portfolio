class ProjectDetail {
  id!: string;
  title!: string;
  achievement!: string;
  context!: string;
  description!: string;
  techStack!: string[];
  image!: string;
  weblinks!: { site: string; url: string }[];
}

const projectData: ProjectDetail[] = [
  {
    id: "gobbler",
    title: "Gobbler",
    achievement: "Winner",
    context: "VMWare Tanzu (Enterprise Solution Development) Award Winner",
    description:
      "A centralized platform for users to post and view leftover food listings",
    techStack: [
      "Flutter",
      "Kubernetes",
      "Kong",
      "Spring Boot",
      "PostgreSQL",
      "FastAPI",
      "RabbitMQ",
      "Google Cloud Platform",
      "Redis",
    ],
    image: "/images/gobbler.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/cherylperyl/gobbler",
      },
    ],
  },
  {
    id: "gs-service-exchange",
    title: "GS Service Exchange",
    achievement: "1ST RUNNER UP",
    context: "Ellipsis Tech Series 2022 Hackathon, Presented by Goldman Sachs",
    description:
      "A web marketplace to provide digital banking services to Southeast Asian Fintech startups",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
    ],
    image: "/images/gs-service-exchange.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
  {
    id: "gsengage2021",
    title: "Customisable Report Rendering",
    achievement: "Finalist",
    context: "GS ENGage 2021 Hackathon by Goldman Sachs",
    description:
      "A highly customizable, scalable, intuitive and automated report rendering solution",
    techStack: [
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "S3",
    ],
    image: "/images/gsengage2021.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/gs-service-exchange",
      },
    ],
  },
  {
    id: "appetizer2021",
    title: "EduVid.io",
    achievement: "CHAMPION",
    context: "APPETIZER Hackathon 2021 by NAVER Cloud",
    description: "Automated video generator platform for education",
    techStack: ["React", "Node.js"],
    image: "/images/appetizer2021.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/quinncheong/appetizer-foobar-2022",
      },
    ],
  },
  {
    id: "zendesk-assessment",
    title: "Zendesk Ticket Viewer",
    achievement: "Offered Software Engineering Intern Position",
    context: "Zendesk Software Engineering Internship Assessment",
    description: "A Python-based CLI tool to view tickets via Zendesk's API",
    techStack: ["Python", "Zendesk API"],
    image: "/images/zcc.png",
    weblinks: [
      {
        site: "github",
        url: "https://github.com/jonathantan1425/zcc-zendesk-ticket-viewer",
      },
    ],
  },
];

export { projectData, ProjectDetail };
