import { motion } from "motion/react";
import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Database,
  Cpu,
  Sparkles,
} from "lucide-react";

type Group = {
  icon: React.ElementType;
  title: string;
  accent: string;
  items: string[];
};

const skillGroups: Group[] = [
  {
    icon: Code2,
    title: "Languages",
    accent: "#8b5cf6",
    items: ["Java", "Go", "Dart", "C", "JavaScript", "TypeScript"],
  },
  {
    icon: Layout,
    title: "Frontend",
    accent: "#06b6d4",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    accent: "#10b981",
    items: ["Node.js", "Go (Golang)", "REST APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    accent: "#3b82f6",
    items: ["Flutter"],
  },
  {
    icon: Database,
    title: "Databases",
    accent: "#f59e0b",
    items: ["Firebase", "MongoDB", "MySQL"],
  },
  {
    icon: Cpu,
    title: "Core Concepts",
    accent: "#f43f5e",
    items: ["Data Structures & Algorithms", "OOP", "System Design"],
  },
];

const aiSkills = [
  "Large Language Models",
  "Prompt Engineering",
  "AI API Integration (OpenAI / Gemini)",
  "Retrieval-Augmented Generation",
];

export default function Skills() {
  return (
    <section className="w-full py-20" id="skills">
      <div className="max-w-6xl mx-auto px-5">
        <motion.p
          className="text-primary font-medium tracking-widest uppercase text-xs mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I work with
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Skills &amp; Technologies
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                style={{ ["--accent" as string]: group.accent }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_-16px_var(--accent)]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                {/* Accent glow that reveals on hover */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                  style={{ background: group.accent }}
                />

                <div className="mb-5 flex items-center gap-3">
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: group.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: group.accent }}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI & Emerging Tech — highlighted full-width card */}
        <motion.div
          className="group relative mt-5 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-fuchsia-500/10 to-transparent p-6 md:p-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fuchsia-500 text-white shadow-lg">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  AI &amp; Emerging Tech
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building intelligent, LLM-powered products
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {aiSkills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/30 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
