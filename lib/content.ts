export const person = {
  name: "Moeez Sohail",
  title: "Software Engineer",
  tagline: "Backend & distributed systems at production scale.",
  email: "moeezsohail11@gmail.com",
  phone: "571-208-5622",
  location: "Washington DC–Baltimore area",
  links: {
    linkedin: "https://www.linkedin.com/in/moeezsohail",
    github: "https://github.com/moeezsohail",
    site: "https://moeezsohail.github.io",
  },
} as const;

export const about = {
  paragraphs: [
    "I'm a software engineer at Cvent, working on high-impact booking and checkout systems in a distributed, microservices-based architecture.",
    "I build backend services with Java (Dropwizard) and AWS—systems that power large-scale integrations and handle thousands of requests daily. My work spans core transaction flows, reliability, and modernizing legacy infrastructure through migrations to REST-based services. I also contribute across the stack with React and GraphQL when the problem calls for it.",
    "I've taken on increasing ownership: leading feature development, improving architecture, and supporting quality through code reviews and mentorship. I'm especially interested in backend and distributed systems that stay reliable at real-world production scale.",
  ],
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  range: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Cvent",
    location: "McLean, VA",
    role: "Software Engineer II",
    range: "Mar 2025 – Present",
    highlights: [
      "Led development of core booking and checkout systems, ensuring reliable end-to-end transaction flows in a microservices architecture (Java, Dropwizard, AWS).",
      "Built and scaled features for international users, enabling global booking workflows across distributed systems.",
      "Drove migration from legacy SOAP services to REST APIs, enabling scalable integrations handling thousands of requests daily.",
      "Technical leadership through design ownership, code reviews, and mentorship—promoting strong engineering practices across the team.",
    ],
  },
  {
    company: "Cvent",
    location: "McLean, VA",
    role: "Software Engineer I",
    range: "Jun 2023 – Mar 2025",
    highlights: [
      "Built and maintained backend services with Java (Dropwizard) for high-throughput booking and checkout workflows.",
      "Developed microservices to aggregate and process booking data using AWS (ECS, Lambda, DynamoDB) for scalable, resilient systems.",
      "Upgraded external APIs and improved service performance for more reliable distributed interactions.",
      "Delivered features across a full-stack architecture (React, GraphQL) with solid testing and integration practices.",
    ],
  },
  {
    company: "Cvent",
    location: "McLean, VA",
    role: "Software Engineering Intern",
    range: "Jun 2022 – Aug 2022",
    highlights: [
      "Refactored data access with Apollo data sources to improve GraphQL-to-REST performance through caching and faster operations.",
      "Built React tooling (Context, React Testing Library) to help teams refactor and test a complex Instant Book UI.",
      "Worked in a Kanban flow across frontend and backend; ran silo and integration testing before staging and production deploys.",
    ],
  },
  {
    company: "University of Virginia",
    location: "Charlottesville, VA",
    role: "Undergraduate Teaching Assistant",
    range: "Sep 2020 – May 2023",
    highlights: [
      "Software Development Methods (CS 2110) through Dec 2021; Data Structures & Algorithms I (CS 2100) from Jan 2022.",
      "Held 5+ office hours per week; met weekly with student groups to reinforce core concepts and code.",
    ],
  },
  {
    company: "MITRE",
    location: "Remote",
    role: "Data Analyst Intern",
    range: "Feb 2021 – Oct 2021",
    highlights: [
      "Collected and structured COVID-19 misinformation data across social platforms for analysis with MITRE’s SQUINT team.",
      "Collaborated on analyses that helped the medical community spot misinformation trends.",
      "Compared vaccination rates with misinformation signals across states to study vaccine hesitancy patterns.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  period?: string;
  description: string;
  /** Short punchy bullets shown under the description */
  highlights?: string[];
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: "Humza Prints",
    period: "2026 – Present",
    description:
      "I designed and built humzaprints.com from first commit to live sales: a full storefront for custom framing and prints—not a portfolio demo, but real checkout, real payouts, and real customers walking through the door.",
    highlights: [
      "PostgreSQL + PostGraphile power the catalog and CMS-style pages so product stories and layouts can evolve without constant redeploys.",
      "Stripe end-to-end for payments; order and fulfillment data stay tied to the same backend the storefront reads from.",
      "Next.js on the front: fast, accessible pages with the kind of finish you expect from a consumer brand, not a weekend script.",
    ],
    tags: ["Next.js", "Stripe", "PostgreSQL", "PostGraphile", "GraphQL"],
    href: "https://humzaprints.com",
    featured: true,
  },
];

export const education = {
  school: "University of Virginia",
  degree: "B.S. Computer Science",
  years: "2019 – 2023",
  detail: "GPA 3.8 • Highest Distinction",
};

export const skills = {
  languages: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  frameworks: ["Dropwizard", "Spring Boot", "React", "Next.js", "Node.js", "GraphQL"],
  cloud: ["AWS (Lambda, Step Functions, EventBridge, ECS)", "Docker"],
  data: ["PostgreSQL", "MSSQL", "OpenSearch", "RabbitMQ"],
};

export const navIds = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
] as const;
