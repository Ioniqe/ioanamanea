export const PROFILE = {
  avatar: "/images/avatar.png",
  location: "Romania",
  name: "Ioana Manea",
  title: "Full-Stack Engineer",
};

export const WEBSITE_URL = "https://ioanamanea.net";

export const LINKS = [
  { href: "https://github.com/Ioniqe", icon: "github", name: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ioana-manea-296892125",
    icon: "linkedin",
    name: "LinkedIn",
  },
];

export const ABOUT = [
  "I'm a Full-Stack Engineer at Keenious, with 5 years of experience building React and TypeScript applications. In 2025 I joined as a Frontend Developer and have since grown into owning our full-stack app end to end, working remotely and continuing to push toward a Tech Lead role.",
];

export const SKILLS: Record<string, string[]> = {
  Backend: ["NestJS", "Hono", "Bun", "Prisma", "SAML 2.0"],
  "Cloud & Databases": [
    "AWS",
    "GCP",
    "Firebase",
    "Terraform",
    "PostgreSQL",
    "MySQL",
    "Cloudflare",
    "Vercel",
    "Docker",
  ],
  Frontend: [
    "React",
    "Next.js",
    "TanStack Start",
    "TanStack Router",
    "React Hooks",
    "React Relay",
    "GraphQL",
    "REST",
    "Webpack",
    "Webpack Module Federation",
    "Vite",
  ],
  Languages: ["TypeScript", "JavaScript", "Node.js"],
  Styling: ["Tailwind CSS", "MUI", "Chakra UI", "SCSS", "shadcn/ui"],
  Testing: ["Cypress", "Jest"],
  Tools: [
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Husky",
    "ESLint",
    "Storybook",
    "GitHub Actions",
    "Biome",
    "Ultracite",
    "oxlint",
    "pnpm",
  ],
};

export const EXPERIENCE = [
  {
    company: "Keenious",
    companyUrl: "https://keenious.com",
    description: [
      "Joined as a Frontend Developer and grew into a Full-Stack Engineer role.",
      "Own the full-stack application end to end, working across the frontend and backend.",
    ],
    id: "full-stack-engineer-keenious",
    location: "Remote",
    period: "2025 - Present",
    title: "Full-Stack Engineer",
  },
  {
    company: "Linnify",
    companyUrl: "https://www.linnify.com",
    description: [
      "Transitioned from a frontend-focused role into full-stack development, contributing across the stack from Terraform and GCP infrastructure to Next.js and TypeScript frontends.",
      "Completed an in-depth full-stack engineering program covering the entire app delivery pipeline.",
    ],
    id: "full-stack-engineer-linnify",
    location: "Romania",
    period: "2024 - 2025",
    title: "Full-Stack Engineer",
  },
  {
    company: "Nooxit",
    companyUrl: "https://www.nooxit.com",
    description: [
      "Sole frontend owner, staffed through Linnify, on a data collection and analysis AI tool for fintech.",
      "Migrated a tightly-coupled monolith into a micro-frontend architecture with Webpack Module Federation, taking ownership of the restructured platform.",
      "Interviewed and mentored new frontend hires, and documented team processes, architecture, and onboarding guides.",
      "Set up the team's coding standards with Husky and ESLint, wrote end-to-end tests with Cypress, and built a component library with Storybook and Chakra UI.",
    ],
    id: "frontend-team-lead-nooxit",
    location: "Germany",
    period: "2022 - 2024",
    title: "Frontend Team Lead",
  },
  {
    company: "Linnify",
    companyUrl: "https://www.linnify.com",
    description: [
      "Built web applications for international teams, strengthening communication, leadership, and delivery skills.",
    ],
    id: "frontend-engineer-linnify",
    location: "Romania",
    period: "2021 - 2024",
    title: "Frontend Engineer",
  },
  {
    company: ".msg systems",
    companyUrl: "https://www.msg.group",
    description: [
      "Worked with React in a full-stack team to build a responsive web platform.",
    ],
    id: "frontend-intern-msg-systems",
    location: "Romania",
    period: "2020",
    title: "Frontend Intern",
  },
];

export const EDUCATION = [
  {
    achievements: [],
    degree: "Software Engineering | Master's Degree",
    location: "Cluj-Napoca, Romania",
    period: "2021 - 2023",
    university: "Babeș-Bolyai University",
  },
  {
    achievements: [],
    degree: "Computer Science | Bachelor's Degree",
    location: "Cluj-Napoca, Romania",
    period: "2017 - 2021",
    university: "Technical University of Cluj-Napoca",
  },
];

export const LANGUAGES = ["Romanian", "English"];

export const PROJECTS = [
  {
    description:
      "A personal recipe collection app — TanStack Start on Cloudflare Workers, a Hono API with Claude-powered recipe extraction, Drizzle ORM over Postgres, and Better Auth.",
    id: "mydishionary",
    name: "MyDishionary",
    url: null,
  },
  {
    description:
      "A personal library for sewing patterns — TanStack Start, tRPC, Drizzle, and Better Auth. Import and view PDF patterns, organize them into folders and albums by designer, and track notes on finished makes.",
    id: "mybindery",
    name: "MyBindery",
    url: null,
  },
  {
    description:
      "Turned an old laptop into a self-hosted home server — Proxmox virtualization, Docker, and Caddy for automatic HTTPS, with hardware-accelerated media transcoding and secure remote access via Tailscale.",
    id: "homelab",
    name: "Homelab",
    url: null,
  },
  {
    description:
      "Personal macOS setup managed with chezmoi — one command provisions a fresh machine: Homebrew, macOS defaults, terminal and editor config, and an encrypted manual-steps doc for the rest.",
    id: "dotfiles",
    name: "Dotfiles",
    url: null,
  },
];
