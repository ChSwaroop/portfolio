import { motion } from 'motion/react';
import { Github, ArrowUpRight, Layers, StickyNote, GraduationCap, BookOpen } from 'lucide-react';

type Project = {
    title: string;
    icon: React.ElementType;
    gradient: string;
    technologies: string[];
    description: string[];
    github?: string;
    demo?: string;
};

const projects: Project[] = [
    {
        title: 'Trello Clone',
        icon: Layers,
        gradient: 'from-violet-500 to-indigo-500',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TanStack Query', 'Zustand', 'Tailwind'],
        description: [
            'Full-stack Kanban-style project management platform inspired by Trello, with board, list, and card management and real-time UI updates.',
            'Drag-and-drop reordering plus advanced card features — labels, due dates, checklists, member assignments, comments, and activity tracking.',
            'File attachments, activity logs, filtering/search, and scalable REST APIs backed by Node.js, Express, PostgreSQL, and Supabase Storage.',
        ],
        github: 'https://github.com/ChSwaroop',
    },
    {
        title: 'Aditya App',
        icon: GraduationCap,
        gradient: 'from-sky-500 to-cyan-500',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        description: [
            'Mobile application with user authentication and a review system built on Firebase.',
            'Enabled users to submit and manage feedback efficiently, wrapped in a clean and intuitive UI.',
        ],
        github: 'https://github.com/ChSwaroop',
    },
    {
        title: 'Notes App',
        icon: StickyNote,
        gradient: 'from-amber-500 to-orange-500',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        description: [
            'Feature-rich notes app with real-time data storage using Firebase, plus image uploads and note sharing.',
            'Modernised UI with light/dark mode and optimized data handling for smooth performance.',
        ],
        github: 'https://github.com/ChSwaroop',
    },
    {
        title: 'Learn Online',
        icon: BookOpen,
        gradient: 'from-emerald-500 to-teal-500',
        technologies: ['Flutter', 'Dart', 'FlutterFlow'],
        description: [
            'Education app offering insights on universities, courses, exams, and career options via detailed Q&A pages.',
            'Responsive frontend built with FlutterFlow and deployed to the Google Play Store.',
        ],
        github: 'https://github.com/ChSwaroop',
    },
];

const Projects = () => {
    return (
        <section className="w-full py-20" id="projects">
            <div className="max-w-6xl mx-auto px-5">
                <motion.p
                    className="text-primary font-medium tracking-widest uppercase text-xs mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Things I've built
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.article
                                key={project.title}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Banner */}
                                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                                    <Icon className="h-12 w-12 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                {/* Body */}
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-3 flex items-start justify-between gap-3">
                                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${project.title} source on GitHub`}
                                                    className="transition-colors hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${project.title} live demo`}
                                                    className="transition-colors hover:text-primary"
                                                >
                                                    <ArrowUpRight className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="mb-5 flex-1 space-y-2 text-sm leading-relaxed text-muted-foreground">
                                        {project.description.map((des, ind) => (
                                            <li key={ind} className="flex gap-2">
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                                                <span>{des}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
