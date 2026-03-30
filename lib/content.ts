export const person = {
  name: 'Moeez Sohail',
  title: 'Software Engineer',
  tagline:
    'I build production web platforms with strong backend architecture and clean product UX.',
  email: 'moeezsohail11@gmail.com',
  phone: '571-208-5622',
  location: 'Washington DC / Northern Virginia',
  links: {
    linkedin: 'https://www.linkedin.com/in/moeezsohail',
    github: 'https://github.com/moeezsohail',
    site: 'https://moeezsohail.github.io'
  }
} as const;

export const about = {
  paragraphs: [
    'Software engineer at Cvent building booking and checkout systems in distributed microservice environments.',
    'I specialize in production-ready backend systems (Java, AWS, PostgreSQL, GraphQL) and ship polished full-stack products with clear business outcomes.'
  ]
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  range: string;
  summary?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Cvent',
    location: 'McLean, VA',
    role: 'Software Engineer II',
    range: 'Mar 2025 – Present',
    summary:
      'Own core booking and checkout reliability across distributed Java services.',
    highlights: [
      'Led end-to-end delivery of booking and checkout features in a Java/Dropwizard microservice stack on AWS, improving transaction reliability.',
      'Drove SOAP-to-REST modernization for partner integrations, enabling scalable request handling at thousands-of-requests-per-day volume.',
      'Provided technical leadership through design ownership, code reviews, and mentoring to raise delivery quality across the team.'
    ]
  },
  {
    company: 'Cvent',
    location: 'McLean, VA',
    role: 'Software Engineer I',
    range: 'Jun 2023 – Mar 2025',
    summary:
      'Built and scaled backend services for high-throughput booking workflows.',
    highlights: [
      'Implemented Java backend services for booking and checkout paths with strong uptime and production-readiness requirements.',
      'Developed AWS-backed microservices (ECS, Lambda, DynamoDB) to aggregate and process booking data at scale.',
      'Improved external API reliability and performance while contributing across the stack with React and GraphQL.'
    ]
  },
  {
    company: 'Cvent',
    location: 'McLean, VA',
    role: 'Software Engineering Intern',
    range: 'Jun 2022 – Aug 2022',
    summary:
      'Improved GraphQL performance and frontend delivery workflows.',
    highlights: [
      'Refactored Apollo data-source patterns to improve GraphQL-to-REST caching and request efficiency.',
      'Built React tooling and test coverage to support refactors in a complex Instant Book UI.',
      'Contributed across frontend and backend delivery with integration testing before staging and production release.'
    ]
  },
  {
    company: 'University of Virginia',
    location: 'Charlottesville, VA',
    role: 'Undergraduate Teaching Assistant',
    range: 'Sep 2020 – May 2023',
    summary:
      'Supported student outcomes in core CS coursework at scale.',
    highlights: [
      'Supported Software Development Methods and Data Structures courses with recurring office hours and mentoring.',
      'Held 5+ office hours weekly and coached student groups on debugging, implementation, and algorithm fundamentals.'
    ]
  },
  {
    company: 'MITRE',
    location: 'Remote',
    role: 'Data Analyst Intern',
    range: 'Feb 2021 – Oct 2021',
    summary:
      'Analyzed social misinformation trends for healthcare research support.',
    highlights: [
      'Collected and structured COVID-19 misinformation data across social platforms for analysis with MITRE’s SQUINT team.',
      'Built comparative analyses of misinformation signals and vaccination rates to support vaccine-hesitancy research.'
    ]
  }
];

export type ProjectItem = {
  title: string;
  period?: string;
  category?: 'Commerce' | 'Collaboration' | 'Platform';
  description: string;
  proof?: string;
  /** Short punchy bullets shown under the description */
  highlights?: string[];
  tags: string[];
  coreStack?: string[];
  opsQuality?: string[];
  href?: string;
  codeHref?: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: 'Humza Prints',
    period: '2026 – Present',
    category: 'Commerce',
    description:
      'I designed and shipped humzaprints.com from first commit to live sales: a production storefront for custom framing and automotive fine-art prints with real checkout, fulfillment workflows, and repeat customers.',
    proof:
      'Production commerce stack with active customer usage, order lifecycle automation, and admin operations tooling.',
    highlights: [
      'Built a polished Next.js + TypeScript storefront across home, shop, product, cart, and post-purchase flows used by active customers.',
      'PostgreSQL + GraphQL power both the product catalog and CMS-style page editing so content updates ship without redeploys.',
      'Stripe Checkout + webhook orchestration run the purchase lifecycle end-to-end, including order confirmations and first-time discount handling.'
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'GraphQL',
      'Stripe',
      'Auth0',
      'Resend',
      'Playwright',
      'Vercel'
    ],
    coreStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'GraphQL',
      'Stripe'
    ],
    opsQuality: ['Auth0', 'Resend', 'Playwright', 'Vercel'],
    href: 'https://humzaprints.com',
    featured: true
  },
  {
    title: 'TripSova',
    period: '2026 – Present',
    category: 'Collaboration',
    description:
      'I designed and shipped Tripsova as a production-ready collaborative travel planning app: a shared workspace where people organize trip ideas, upcoming plans, and completed journeys while coordinating with friends.',
    proof:
      'Live collaborative planning app with authenticated sharing, role-based access, and operational notification workflows.',
    highlights: [
      'Built a polished Next.js + TypeScript experience across landing, trip board, trip detail, sharing, and network flows so plans, links, and expenses live in one place.',
      'Implemented PostgreSQL-backed trip, collaborator, invite, and feed models with secure API routes for create, edit, and share workflows plus granular access control.',
      'Built AI-assisted planning using the Vercel AI SDK (ai, @ai-sdk/react) with streaming chat UX, guided trip starters, and structured suggestions for new and existing trip flows.'
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'React',
      'Vercel AI SDK',
      'NextAuth',
      'Resend',
      'Cloudinary',
      'Playwright',
      'Jest',
      'Vercel'
    ],
    coreStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'React',
      'Vercel AI SDK'
    ],
    opsQuality: [
      'NextAuth',
      'Resend',
      'Cloudinary',
      'Playwright + Jest',
      'Vercel'
    ],
    href: 'https://tripsova.vercel.app/',
    featured: false
  }
];

export const education = {
  school: 'University of Virginia',
  degree: 'B.S. Computer Science',
  years: '2019 – 2023',
  detail: 'GPA 3.8 • Highest Distinction',
  focus: 'Distributed systems, backend architecture, and full-stack product delivery.'
};

export const skills = {
  roleTracks: ['Backend Engineer', 'Full-stack Engineer', 'Distributed Systems'],
  groups: [
    {
      label: 'Backend & APIs',
      level: 'Primary',
      description: 'Production service design, integrations, and transaction workflows.',
      items: ['Java', 'Dropwizard', 'Spring Boot', 'GraphQL', 'REST', 'Node.js']
    },
    {
      label: 'Cloud & infrastructure',
      level: 'Primary',
      description: 'AWS-first deployment and event-driven architecture patterns.',
      items: ['AWS ECS', 'AWS Lambda', 'EventBridge', 'Step Functions', 'Docker']
    },
    {
      label: 'Frontend',
      level: 'Working',
      description: 'Product-focused UI implementation for end-to-end delivery.',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript']
    },
    {
      label: 'Data & messaging',
      level: 'Primary',
      description: 'Reliable data modeling, search, and async processing.',
      items: ['PostgreSQL', 'MSSQL', 'OpenSearch', 'RabbitMQ', 'SQL']
    },
    {
      label: 'Languages',
      level: 'Primary',
      description: 'Core languages used across backend and full-stack work.',
      items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL']
    }
  ],
  alsoWorkedWith: ['Auth0', 'Stripe', 'Resend', 'Playwright']
};

export const navIds = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' }
] as const;
