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
  company: 'Deeptha.ai',
  location: 'India',
  firstName: 'Swaroop',
  title: 'Full stack Developer',
  about:
    'I build fast, data-heavy products: React and TypeScript on the surface, Go services underneath, and LLM features where they earn their latency.',
  aboutHighlight: 'LLM features where they earn their latency.',
  intro:
    'Full-stack engineer working across React and TypeScript frontends, the Go microservices behind them, and LLM features (RAG, AI agents) where they actually help. 2+ years shipping analytics platforms in production.',
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
    company: 'Deeptha.ai',
    short: 'SDE I',
    role: 'Software Development Engineer I',
    start: '2025-08',
    end: null,
    summary:
      'Full-stack on Klaritics, an analytics platform: React and TypeScript on the frontend, Go services behind it.',
    highlights: [
      'Built Restricted Mode for shared dashboards and charts: the permission matrix in the UI and the Go backend changes behind it.',
      'Building a standalone Event exporter service downstream of the events pipeline, for self-hosted deployments.',
      'Manage complex dashboard state and tune rendering performance for dynamic, data-dense views.',
    ],
    tags: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Kubernetes'],
  },
  {
    company: 'Apxor',
    short: 'Associate SDE',
    role: 'Associate Software Development Engineer',
    start: '2024-10',
    end: '2025-07',
    summary: 'Full-stack features for Apxor’s product analytics and engagement platform for mobile apps.',
    highlights: [
      'Developed full-stack features with React and Go for scalable, interactive web applications.',
      'Explored LLMs and AI-driven tooling, and integrated them into product features.',
    ],
    tags: ['React', 'Go', 'LLMs'],
  },
  {
    company: 'Workbees',
    short: 'Mobile Intern',
    role: 'Flutter Developer Intern',
    start: '2024-04',
    end: '2024-09',
    summary: 'Built Flutter apps end to end at Workbees Technologies: UI, features and backend integration.',
    highlights: [
      'Shipped mobile app features in Flutter, from UI design to wiring up backend services.',
      'Worked with senior developers and designers to scope requirements and fix issues.',
    ],
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
]

export const stackLayers: StackLayer[] = [
  {
    id: 'L1',
    name: 'Interface',
    note: 'What people touch',
    items: [{ name: 'TypeScript', core: true }, { name: 'React', core: true }, { name: 'Next.js' }],
  },
  {
    id: 'L2',
    name: 'Services',
    note: 'APIs and the work behind them',
    items: [{ name: 'Go', core: true }, { name: 'gRPC' }, { name: 'Node.js' }, { name: 'Java' }],
  },
  {
    id: 'L3',
    name: 'Data',
    note: 'Storage, caching, queries',
    items: [{ name: 'PostgreSQL' }, { name: 'Redis' }, { name: 'MongoDB' }],
  },
  {
    id: 'L4',
    name: 'Platform',
    note: 'How it ships and runs',
    items: [{ name: 'Docker' }, { name: 'Kubernetes' }],
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
      'Kanban project management with boards, lists and cards, drag-and-drop reordering, labels, due dates, checklists and activity tracking. REST APIs on Node and PostgreSQL, files on Supabase Storage.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    href: 'https://github.com/ChSwaroop',
  },
  {
    id: 'P-02',
    kind: 'Mobile',
    name: 'Skill Share Hub',
    summary: 'A place to trade skills with other people, with real-time chat and voice calls built in.',
    stack: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    href: 'https://github.com/ChSwaroop',
  },
  {
    id: 'P-03',
    kind: 'Mobile',
    name: 'Aditya App',
    summary:
      'Campus app for Aditya Engineering College with sign-in and a review system, so students can submit and manage feedback.',
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
  { degree: 'Diploma, Computer Engineering', school: 'Aditya Engineering College' },
]

export const contactLinks: Link[] = [
  { label: 'GitHub', value: profile.github.handle, href: profile.github.href },
  { label: 'LinkedIn', value: profile.linkedin.handle, href: profile.linkedin.href },
  { label: 'LeetCode', value: profile.leetcode.handle, href: profile.leetcode.href },
  { label: 'Resume', value: 'View PDF', href: profile.resume },
]
