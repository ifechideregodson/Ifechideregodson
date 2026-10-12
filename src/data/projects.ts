export type Project = {
  title: string;
  category: "Web Development" | "AI & Health" | "Education" | "Media";
  description: string;
  tags: string[];
  status: "In progress" | "Live project" | "Research";
  url?: string;
};

export const projects: Project[] = [
  {
    title: "MedAI Clinical Platform",
    category: "AI & Health",
    description: "A clinical AI platform project connecting medical-image analysis, patient records, clinician review, and structured reporting.",
    tags: ["Next.js", "TypeScript", "AI", "Healthcare"],
    status: "In progress",
    url: "https://github.com/ifechideregodson/Medai"
  },
  {
    title: "Medical AI Analyzer",
    category: "AI & Health",
    description: "A project focused on medical image analysis workflows and machine-learning model training and evaluation.",
    tags: ["Python", "Machine Learning", "Medical Imaging"],
    status: "Research",
    url: "https://github.com/ifechideregodson/medical-ai-analyzer"
  },
  {
    title: "Doorway Online University",
    category: "Education",
    description: "An online learning platform project for courses, student access, teaching, and administration.",
    tags: ["Next.js", "Education", "Web App"],
    status: "In progress",
    url: "https://github.com/ifechideregodson/university"
  },
  {
    title: "GodsoTV",
    category: "Media",
    description: "A web-based streaming and media platform project for online viewing.",
    tags: ["Next.js", "Streaming", "Web App"],
    status: "In progress",
    url: "https://github.com/ifechideregodson"
  },
  {
    title: "MySchool CBT",
    category: "Education",
    description: "An offline-first computer-based test app concept for exam practice, locally stored questions, and results.",
    tags: ["Next.js", "Dexie.js", "Offline-first"],
    status: "In progress",
    url: "https://github.com/ifechideregodson"
  }
];
