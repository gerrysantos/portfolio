// Everything about Gerry lives here. The pages read from this file.

export const site = {
  name: 'Gerry Santos',
  role: 'Web developer',
  location: 'Taguig, Philippines',
  timezone: 'Asia/Manila',
  email: 'gerrysantos0226@gmail.com',
  available: true,
  intro:
    'I build responsive websites and the APIs behind them — React on the front, Node, Express and SQL on the back. Six years in web development, now going deeper into full-stack work.',
  resume: '/GerryQSantosResume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/gerrysantos' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/gerry-santos-026988242/' },
    { label: 'Email', href: 'mailto:gerrysantos0226@gmail.com' },
    { label: 'Résumé', href: '/GerryQSantosResume.pdf' },
  ],
  marquee: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Shopify Liquid'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  cover: string
  tint: string
  summary: string
  stack: string[]
  role: string[]
  deliverables: string[]
  links: { label: string; href: string }[]
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'k-12-ai-chatbot',
    title: 'K-12 AI Chatbot',
    client: 'Capstone project',
    category: 'AI chatbot',
    cover: '/images/work/k12.svg',
    tint: '#e2e4f6',
    summary:
      'An LLM-powered chatbot that gives students feedback on their answers, with a React front end feeding an Express API and the OpenAI API.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'OpenAI API'],
    role: ['Full-stack development'],
    deliverables: ['Chat interface', 'Express API', 'MySQL schema'],
    links: [{ label: 'GitHub', href: 'https://github.com/gerrysantos/chatbox-gpt' }],
    body: [
      'K-12 AI Chatbot started as a capstone project: could a chatbot help students understand their mistakes instead of just marking them wrong?',
      'The interface is React, the server is Node and Express, and the OpenAI API does the language work. Conversations and student records are stored in MySQL so a session can be picked up again later, and prompts are shaped so replies stay short enough to read on a phone.',
      'Building it meant learning how much of a good chatbot is prompt design and error handling — timeouts, empty responses, and answers that drift off topic all needed a fallback. The source is on GitHub.',
    ],
    size: 'large',
  },
  {
    slug: 'shopify-ecommerce',
    title: 'Shopify Storefronts',
    client: 'Platinum Karaoke · GameXtreme · Whitehaus',
    category: 'E-commerce',
    cover: '/images/work/platinum.webp',
    tint: '#efe3d2',
    summary:
      'Theme customization and front-end work for live Shopify stores selling across the Philippines, the UAE and Qatar.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML'],
    role: ['Theme customization', 'Front-end development'],
    deliverables: ['Custom sections', 'Responsive layouts', 'Campaign pages'],
    links: [{ label: 'Visit Platinum Karaoke', href: 'https://platinumkaraoke.com/' }],
    body: [
      'Platinum Karaoke, GameXtreme and Whitehaus all run on Shopify, and all of them need their storefronts changed constantly: new bundles, seasonal campaigns, regional pricing and layouts that hold together on a phone.',
      'My work is in the theme layer — Liquid sections and blocks, JavaScript for interactive parts like product carousels and variant pickers, and CSS for the responsive layouts. Everything is edited against live production stores, so changes are scoped carefully and tested on a duplicate theme first.',
      'The Platinum Karaoke store today serves customers in the Philippines, UAE and Qatar with the same theme, which is the part I am proudest of.',
    ],
    size: 'small',
  },
  {
    slug: 'vismay-corporate-site',
    title: 'Vismay Corporate Site',
    client: 'Vismay International Corporation',
    category: 'Corporate website',
    cover: '/images/work/vismay.webp',
    tint: '#dfe3ec',
    summary:
      'A responsive corporate website built in React, with reusable sections and a full-screen brand-led hero.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    role: ['Front-end development'],
    deliverables: ['React components', 'Responsive layout', 'Deployment'],
    links: [
      { label: 'Visit the site', href: 'https://vismayintlcorp.com/' },
      { label: 'GitHub', href: 'https://github.com/gerry-vismay/vismayintlcorp.com.git' },
    ],
    body: [
      'Vismay International Corporation needed a company site that could grow with its brands: entertainment, retail and distribution under one roof.',
      'I built it in React with reusable sections, so a new brand or office can be added without redesigning a page. The hero, brand pages and contact sections share one type and spacing system, and the whole site is responsive down to small phones.',
      'It is one of the projects where front-end decisions showed up in the business — pages can be updated by editing content rather than rebuilding the layout.',
    ],
    size: 'small',
  },
  {
    slug: 'jba7-realty',
    title: 'JBA7 Realty',
    client: 'JBA7 Realty Services',
    category: 'Real estate website',
    cover: '/images/work/jba7.svg',
    tint: '#e8e2d6',
    summary:
      'A real estate website with structured property layouts, SEO-friendly markup, and hosting, domain and DNS set up end to end.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    role: ['Front-end development', 'Hosting and deployment'],
    deliverables: ['Property layouts', 'SEO markup', 'Domain and DNS setup'],
    links: [],
    body: [
      'JBA7 Realty needed a site that made listings easy to scan: photos first, details second, and a contact path on every page.',
      'I built the responsive layouts in HTML, CSS and JavaScript, added structured markup so listings read well to search engines, and handled the less glamorous half of the job — hosting, domain and DNS configuration so the site stayed up and loaded quickly.',
      'The project is no longer online, but it is where I learned to own a site from first layout to live deployment.',
    ],
    size: 'small',
  },
  {
    slug: 'admin-dashboard',
    title: 'Admin Dashboard',
    client: 'Personal project',
    category: 'Web app',
    cover: '/images/work/dashboard.webp',
    tint: '#dde3ef',
    summary:
      'A CRUD admin panel with authentication, role management and a responsive sidebar for managing team, contacts and invoices.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    role: ['Full-stack development'],
    deliverables: ['Auth flow', 'CRUD modules', 'Responsive dashboard'],
    links: [{ label: 'Visit the dashboard', href: 'https://reactapp-admin-dashboard.netlify.app/' }],
    body: [
      'The admin dashboard is where I practised the back half of an application: sessions, permissions and the CRUD screens that sit on top of them.',
      'React handles the interface — a collapsible sidebar, tables for team members, contacts and invoices, and forms that validate before they submit. An Express API in front of MySQL does the reads and writes, with routes guarded by the signed-in user’s role.',
      'It is a demo build, but it runs the same shape as the internal tools I supported earlier in my career, which made it a useful bridge between support work and product work.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Front-end development',
    body: 'React interfaces, reusable components and responsive layouts in HTML, CSS and Tailwind. Built to hold up on a phone, a laptop and everything between.',
  },
  {
    title: 'Back end and APIs',
    body: 'Node.js and Express endpoints, authentication, and CRUD against MySQL, MSSQL or MongoDB. The part of the site you do not see, working quietly.',
  },
  {
    title: 'E-commerce',
    body: 'Shopify theme customization with Liquid, WordPress setup and maintenance, product and campaign updates for stores that are already live and selling.',
  },
  {
    title: 'Hosting and upkeep',
    body: 'Domains, DNS, hosting on Netlify or cPanel, deployments and the fixes that keep an existing site healthy. I have done this for every site I have shipped.',
  },
]

export const toolkit = [
  {
    group: 'Front end',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive design'],
  },
  {
    group: 'Back end',
    items: ['Node.js', 'Express', 'PHP', 'REST APIs', 'C++', 'Python'],
  },
  {
    group: 'Data',
    items: ['MySQL', 'MSSQL', 'MongoDB'],
  },
  {
    group: 'Commerce & AI',
    items: ['Shopify', 'Liquid', 'WordPress', 'OpenAI API'],
  },
  {
    group: 'Tooling',
    items: ['Git & GitHub', 'Figma', 'Netlify', 'DNS & hosting'],
  },
]

export const experience = [
  {
    period: '2022 — now',
    title: 'Web Developer, E-commerce',
    detail: 'Vismay International Corporation · Shopify and WordPress storefronts for Platinum Karaoke, GameXtreme and Whitehaus',
  },
  {
    period: 'Jan — Jun 2022',
    title: 'Junior QA / Service Desk Analyst',
    detail: 'DITO Telecommunity · functional and regression testing, incident reports, user support',
  },
  {
    period: '2016 — 2022',
    title: 'Finance System Support / Junior .NET Developer',
    detail: 'Metro Drug Inc. · MSSQL reporting, Level 1 application support, database maintenance',
  },
  {
    period: '2015',
    title: 'Document Specialist',
    detail: 'RR Donnelley · quality control and proofreading before release',
  },
]

export const education = {
  school: 'Taguig City University',
  degree: 'BS Computer Science',
  period: '2010 — 2014',
}
