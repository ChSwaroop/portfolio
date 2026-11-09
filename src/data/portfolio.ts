/**
 * Every piece of copy on the site lives here. Sections only map over this data.
 */

export interface Link {
  label: string
  value: string
  href: string
}

export interface Role {
  company: string
  /** Short role label used in the timeline */
  short: string
  role: string
  /** Inclusive start / end as YYYY-MM; `end: null` means current */
  start: string
  end: string | null
  summary: string
  highlights: string[]
  tags: string[]
}

export interface StackLayer {
  id: string
  name: string
  note: string
  items: { name: string; core?: boolean }[]
}

export interface Project {
  id: string
  kind: 'Web' | 'Mobile'
  name: string
  summary: string
  stack: string[]
  href: string
}

export interface Achievement {
  result: string
  title: string
  detail: string
}

export interface Education {
  degree: string
  school: string
}

export interface Stat {
  value: string
  label: string
}

export const profile = {
  name: 'Chitturi Swaroop',
  role: 'Software Engineer 1',
  company: 'Deeptaai',
  location: 'Andhra Pradesh, India',
  firstName: 'Swaroop',
  title: 'Full stack Developer',
  about:
    'I build fast, data-heavy products: React and TypeScript on the surface, Go services underneath, and LLM features where they earn their latency.',
  aboutHighlight: 'LLM features where they earn their latency.',
  intro:
    'Full stack developer working across React and TypeScript frontends, the Go services behind them, and LLM features (RAG, AI agents) where they actually help. 2+ years shipping multi-tenant and analytics platforms in production.',
  email: 'swaroopch1234@gmail.com',
  resume: '/assets/resume.pdf',
  github: { handle: 'ChSwaroop', href: 'https://github.com/ChSwaroop' },
  linkedin: { handle: 'swaroop-chitturi', href: 'https://www.linkedin.com/in/swaroop-chitturi/' },
  leetcode: { handle: 'Swaroop_18', href: 'https://leetcode.com/u/Swaroop_18/' },
} as const

/** Header links, in page order. `top` is the hero. */
export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavId = (typeof nav)[number]['id']

export const stats: Stat[] = [
  { value: '2+ yrs', label: 'In production' },
  { value: '3', label: 'Engineering teams' },
  { value: '#6', label: 'AP-ECET 2022 rank' },
  { value: '5★', label: 'HackerRank' },
]

/** Newest first. */
export const experience: Role[] = [
  {
    company: 'Deeptaai',
    short: 'SE I',
    role: 'Software Engineer I',
    start: '2025-08',
    end: null,
    summary:
      'Full stack features end to end for a multi-tenant application management platform and a large-scale analytics platform, from React and TypeScript to Go services.',
    highlights: [
      'Role-based access control with custom roles and per-module permissions, plus per-tenant configuration and fee management.',
      'A React SDK for a no-code form builder: multi-stage forms with document uploads and an embedded payment step.',
      'Go REST APIs and dashboards for payment renewal and referral incentive workflows.',
      'Customer-facing analytics dashboards over large event datasets, kept fast with memoization and virtualization.',
    ],
    tags: ['React', 'TypeScript', 'Go', 'RBAC', 'Microservices'],
  },
  {
    company: 'Apxor',
    short: 'Associate SDE',
    role: 'Associate Software Development Engineer',
    start: '2024-10',
    end: '2025-07',
    summary:
      'Full stack features in React and Go for product analytics customers, a Flutter app for a community Q&A platform, and early LLM prototypes.',
    highlights: [
      'Engineered full stack features across React and Go for customer-facing product analytics apps.',
      'Built reusable UI components and REST integrations that sped up delivery across product modules.',
      'Built the Flutter app and parts of the Go backend for a community Q&A platform on education and careers.',
      'Prototyped OpenAI and Gemini integrations, prompt engineering and RAG patterns for the team.',
    ],
    tags: ['React', 'Go', 'Flutter', 'LLMs'],
  },
  {
    company: 'Workbees',
    short: 'Mobile Intern',
    role: 'Software Engineering Intern (Mobile)',
    start: '2024-04',
    end: '2024-09',
    summary:
      'Shipped cross-platform mobile features in Flutter at Workbees Technologies, from UI to backend REST services and authentication.',
    highlights: [
      'Shipped cross-platform features in Flutter and Dart, including UI and integration with REST services and auth.',
      'Turned loosely defined requirements into working features with senior engineers and designers.',
    ],
    tags: ['Flutter', 'Dart', 'REST APIs'],
  },
]

export const stackLayers: StackLayer[] = [
  {
    id: 'L1',
    name: 'Interface',
    note: 'What people touch',
    items: [
      { name: 'TypeScript', core: true },
      { name: 'React', core: true },
      { name: 'Next.js' },
      { name: 'TanStack Query' },
      { name: 'Zustand' },
      { name: 'Tailwind CSS' },
      { name: 'Flutter',core: true },
    ],
  },
  {
    id: 'L2',
    name: 'Services',
    note: 'APIs and the work behind them',
    items: [{ name: 'Go', core: true }, { name: 'gRPC' }, { name: 'Node.js' }, { name: 'Express' }, { name: 'Java', core: true }],
  },
  {
    id: 'L3',
    name: 'Data',
    note: 'Storage, caching, queries',
    items: [{ name: 'PostgreSQL', core: true }, { name: 'Redis' }, { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'Supabase' }, { name: 'Firebase' }],
  },
  {
    id: 'L4',
    name: 'Platform',
    note: 'How it ships and runs',
    items: [{ name: 'Docker' }, { name: 'Kubernetes', core: true }, { name: 'Grafana Tanka' }, { name: 'Git' }],
  },
  {
    id: 'L5',
    name: 'Intelligence',
    note: 'LLM features where they help',
    items: [{ name: 'Python' }, { name: 'LLMs' }, { name: 'RAG' }, { name: 'AI agents' }],
  },
]

export const projects: Project[] = [
  {
    id: 'P-01',
    kind: 'Web',
    name: 'Trello Clone',
    summary:
      'Kanban project management with boards, lists and cards, drag-and-drop reordering, labels, due dates, checklists, comments and activity tracking. A Node and Express REST service on PostgreSQL, with attachments on Supabase Storage.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    href: 'https://trello-clone-scaler-demo.vercel.app',
  },
  {
    id: 'P-02',
    kind: 'Mobile',
    name: 'Skill Share Hub',
    summary:
      'Skill-sharing and mentorship app: find peers by shared skills, connect with them, then chat or voice call in real time. An in-app chatbot helps people get started.',
    stack: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    href: 'https://github.com/ChSwaroop',
  },
  {
    id: 'P-03',
    kind: 'Mobile',
    name: 'Aditya App',
    summary:
      'Campus app for Aditya college: courses across programs, placement statistics and campus information, with sign-in and in-app reviews from students.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    href: 'https://github.com/ChSwaroop',
  },
]

export const achievements: Achievement[] = [
  { result: 'Rank 6', title: 'AP-ECET 2022', detail: 'State-level engineering entrance exam, Andhra Pradesh' },
  { result: '1st', title: 'Appathon', detail: 'College-wide, with a Flutter + Firebase productivity app' },
  { result: '5★', title: 'HackerRank', detail: 'Problem Solving' },
  { result: '2★', title: 'CodeChef', detail: 'Competitive programming rating' },
]

export const education: Education[] = [
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Aditya Engineering College' },
  { degree: 'Diploma, Computer Engineering', school: 'Aditya Polytechnic College' },
]

export const contactLinks: Link[] = [
  { label: 'GitHub', value: profile.github.handle, href: profile.github.href },
  { label: 'LinkedIn', value: profile.linkedin.handle, href: profile.linkedin.href },
  { label: 'LeetCode', value: profile.leetcode.handle, href: profile.leetcode.href },
  { label: 'Resume', value: 'View PDF', href: profile.resume },
]
