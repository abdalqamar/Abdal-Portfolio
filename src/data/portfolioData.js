//  Navigation
export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

//  Skills
export const FRONTEND_SKILLS = [
  { name: "React.js", hot: true },
  { name: "JavaScript ES6+", hot: true },
  { name: "TanStack Query", hot: true },
  { name: "Tailwind CSS", hot: true },
  { name: "HTML5", hot: false },
  { name: "CSS3", hot: false },
];

export const BACKEND_SKILLS = [
  { name: "Node.js", hot: true },
  { name: "Express.js", hot: true },
  { name: "REST APIs", hot: true },
  { name: "MongoDB", hot: true },
  { name: "Mongoose", hot: false },
  { name: "JWT Auth", hot: false },
  { name: "bcrypt", hot: false },
  { name: "CORS", hot: false },
];

export const INTEGRATION_SKILLS = [
  { name: "Payment Gateway", hot: true },
  { name: "Resend (Email)", hot: true },
  { name: "Role-based Auth", hot: false },
  { name: "Error Handling", hot: false },
];

export const TOOL_SKILLS = [
  { name: "Git & GitHub", hot: false },
  { name: "Postman", hot: false },
  { name: "VS Code", hot: false },
  { name: "Vercel / Render", hot: false },
];

//  Projects
export const PROJECTS = [
  {
    id: 1,
    badge: "LIVE · FULL-STACK · MERN",
    title: "StudyHub",
    subtitle: "Learning Management System",
    desc: "A production-ready, full-stack LMS where users can register, explore, purchase, and access courses. Supports three roles — Admin, Instructor, and Student — with secure authentication, payment workflows, and automated email notifications.",
    features: [
      "Role-based auth (Admin / Instructor / Student) with JWT",
      "Course creation, update & management system",
      "Online payment flow — success & failure handling",
      "Automated transactional emails via Resend",
      "Admin dashboard with search, filter & pagination",
      "Optimized API caching with TanStack Query",
      "Centralized error handling across all REST APIs",
      "Secure, well-structured backend architecture",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "TanStack Query",
      "Tailwind CSS",
      "Resend",
      "Payments",
    ],
    liveUrl: "https://www.studyhubedu.online/",
    githubUrl: "https://github.com/abdalqamar/studyhub-frontend",
  },
  // Aur projects add karne hain toh yahan add karo:
  // {
  //   id: 2,
  //   badge: "FULL-STACK",
  //   title: "Project Two",
  //   ...
  // }
];

//  Footer links
export const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/abdalqamar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdalqamar" },
  { label: "StudyHub", href: "https://www.studyhubedu.online/" },
  { label: "Email", href: "mailto:your@email.com" },
];
