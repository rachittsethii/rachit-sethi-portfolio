export const profile = {
  name: "Rachit Sethi",
  role: "Software Engineer",
  tagline: "I build fast, reliable web products — from clean interfaces to the APIs behind them.",
  location: "India",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  resumeUrl: "/resume.pdf",
  about: [
    "I'm a software engineer focused on building end-to-end web applications. I enjoy the whole path of a feature: shaping the data model, writing the service that powers it, and polishing the interface people actually touch.",
    "Most of my work sits around JavaScript/TypeScript, React and Node, with a healthy amount of database and cloud tooling. I care about performance budgets, readable code, and shipping things that keep working after launch.",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"] },
  { group: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2024 — Present",
    points: [
      "Built and shipped customer-facing features across the web stack.",
      "Improved page performance and reduced load times on key flows.",
      "Collaborated with design and product to scope and deliver releases.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Company Name",
    period: "2023 — 2024",
    points: [
      "Developed internal tooling that cut manual reporting effort.",
      "Wrote tests and documentation for shared service modules.",
    ],
  },
];

export const education = [
  {
    school: "University Name",
    degree: "B.Tech, Computer Science",
    period: "2019 — 2023",
  },
];

export const projects = [
  {
    name: "Project One",
    blurb: "A full-stack app with authentication, dashboards and real-time updates.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    repo: "#",
  },
  {
    name: "Project Two",
    blurb: "A tool that automates a repetitive workflow and exports clean reports.",
    stack: ["TypeScript", "Express", "MongoDB"],
    link: "#",
    repo: "#",
  },
  {
    name: "Project Three",
    blurb: "An interface-heavy product focused on speed and keyboard-first usage.",
    stack: ["Next.js", "Tailwind CSS"],
    link: "#",
    repo: "#",
  },
];