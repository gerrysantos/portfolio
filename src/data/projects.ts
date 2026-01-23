import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "K-12 AI Chatbot",
    description:
      "LLM-powered chatbot for educational feedback using Node.js and OpenAI API.",
    stack: ["React", "Node.js", "Express", "MySQL", "OpenAI"],
    github: "https://github.com/gerrysantos/chatbox-gpt.git",
  },
  {
    title: "Shopify E-commerce Customization",
    description:
      "Customized and optimized Shopify themes using Liquid, JavaScript, and CSS for production e-commerce websites.",
    stack: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML"],
    demo: "https://platinumkaraoke.com",
    note: "Used on Platinum Karaoke (PH/AE/QA), GameXtreme, Whitehaus",
  },
  {
    title: "Corporate Website (React)",
    description:
      "Responsive corporate website built using React with reusable components and modern frontend practices.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    demo: "https://vismayintlcorp.com",
    github: "https://github.com/gerry-vismay/vismayintlcorp.com.git",
  },
  {
    title: "JBA7 Realty",
    description: "Real estate website with responsive layout and clean UI.",
    stack: ["ReactJS", "HTML", "CSS", "JavaScript"],
    demo: "https://jba7realty.com",
  },
  {
    title: "Admin Dashboard",
    description: "CRUD admin panel with authentication and role management.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    demo: "https://reactapp-admin-dashboard.netlify.app/",
  },
];
