export interface Skill {
  name: string
  level: string
  width: number
}

export interface Experience {
  dateRange: string
  duration: string
  title: string
  tags: string[]
  lang?: string
  confidential?: boolean
  bullets: string[]
  isPersonal?: boolean
}

export interface Education {
  degree: string
  school: string
  year: string
}

export const skills: Skill[] = [
  { name: 'React',               level: '3.5 years', width: 95 },
  { name: 'HTML / CSS',          level: '3.5 years', width: 95 },
  { name: 'TypeScript',          level: '3.5 years', width: 88 },
  { name: 'Tailwind / MUI',      level: '3.5 years', width: 90 },
  { name: 'Node.js / Express',   level: 'Learning',  width: 45 },
  { name: 'React Query / TanStack', level: 'Production', width: 80 },
  { name: 'Supabase / Netlify',  level: 'Deployed',  width: 72 },
  { name: 'DevOps',              level: 'Course',    width: 50 },
]

export const softSkills: string[] = [
  'Communication', 'Teamwork', 'Adaptability',
  'Problem-Solving', 'Time Management', 'AI Enthusiast', 'Aerial Yoga Instructor',
]

export const experiences: Experience[] = [
  {
    dateRange: '01/2026 — Now',
    duration: 'Current role',
    title: 'AI Chat Platform Customization',
    tags: ['Open Web UI', 'LibreChat', 'Deployment', 'AI Integration'],
    lang: '🇩🇪 German',
    confidential: true,
    bullets: [
      'Customizing, configuring and deploying open-source AI chat platforms',
      'Deep knowledge of Open Web UI and LibreChat — from setup to production deployment',
    ],
  },
  {
    dateRange: '08/2025 — 01/2026',
    duration: '6 months',
    title: 'Large-Scale Web Application',
    tags: ['React', 'PrimeReact', 'Tailwind', 'React Query', 'TanStack Form'],
    lang: '🇩🇪 German',
    confidential: true,
    bullets: [
      'Built a complex enterprise web app from scratch — saw the full lifecycle from 0 to production',
      'Solved non-trivial integration challenges (Tailwind + PrimeReact compatibility)',
      'Worked with React Query for server state and TanStack Form for complex form logic',
    ],
  },
  {
    dateRange: '09/2024 — 08/2025',
    duration: '11 months',
    title: 'E-Commerce Web & Mobile App',
    tags: ['Next.js', 'TypeScript', 'CSS', 'Scrum'],
    lang: '🇬🇧 English',
    bullets: [
      'Develop user interface — implement design, new features, write tests, fix bugs',
    ],
  },
  {
    dateRange: '02/2024 — 09/2024',
    duration: '7 months',
    title: 'Bank Web Application',
    tags: ['React', 'TypeScript', 'Material UI', 'CSS', 'Kanban'],
    lang: '🇩🇪 German',
    bullets: [
      'Develop responsive design, implement new features, fix bugs, optimize performance',
    ],
  },
  {
    dateRange: '11/2023 — 02/2024',
    duration: '3 months',
    title: 'Web App for PDF File Extraction',
    tags: ['Vanilla JS', 'Django', 'HTML', 'Tailwind'],
    lang: '🇬🇧 English',
    bullets: [
      'Develop user interface, implement APIs with Vanilla JavaScript (Fetch API)',
    ],
  },
  {
    dateRange: '11/2022 — 11/2023',
    duration: '12 months',
    title: 'Agile Project Management Web App',
    tags: ['React', 'TypeScript', 'SASS/HTML', 'Scrum'],
    lang: '🇩🇪 German',
    bullets: [
      'Create responsive design, implement features in Agile environment',
    ],
  },
  {
    dateRange: 'Personal Project',
    duration: 'Live on Netlify',
    title: 'Yoga Studio Booking App',
    tags: ['React', 'Supabase', 'Netlify', 'Claude AI'],
    isPersonal: true,
    bullets: [
      'Booking app for a small yoga studio — clients register and unregister for classes by name',
      'Built with AI assistance (Claude), deployed on Netlify with Supabase as the database',
      'Real client, real deployment — end-to-end ownership of the product',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'M.Sc. Information Technology in Business Management',
    school: 'Technical University of Sofia — English Faculty',
    year: '2024 - 2025',
  },
  {
    degree: 'B.Sc. Informatics — Dual Diploma',
    school: 'Technical University of Sofia (DE faculty) & Otto von Guericke University Magdeburg',
    year: '2019 — 2023',
  },
  {
    degree: 'Mathematical Gymnasium',
    school: 'Blagoevgrad',
    year: '2019',
  },
  {
    degree: 'Erasmus+ / DAAD',
    school: 'One semester in Magdeburg · Crete 2023 · Plovdiv 2024',
    year: '2022 — 2024',
  },
]

export const certificates: string[] = [
  'Cambridge First Certificate in English (FCE)',
  'Test DAF & TELC Deutsch C1',
  'DevOps Course',
  'Java Basics & Fundamentals — SoftUni',
  'Design Basics — SoftUni',
]

export const languages = [
  { flag: '🇩🇪', name: 'German',   level: 'C1 — Proficient' },
  { flag: '🇬🇧', name: 'English',  level: 'C1 — Proficient' },
  { flag: '🇧🇬', name: 'Bulgarian', level: 'Native' },
]
