import { cn } from "@/lib/utils";
import { Server } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: "💻",
      title: "C Programming",
      description: "Strong base in procedural programming and memory management.",
    },
    {
      icon: "☕",
      title: "Java",
      description: "Experienced in OOP and backend development.",
    },
    {
      icon: "🎯",
      title: "Dart",
      description: "Used with Flutter for building mobile apps.",
    },

    {
      icon: "🧪",
      title: "JavaScript",
      description: "Dynamic scripting for building interactive UIs.",
    },
    {
      icon: "📱",
      title: "Flutter",
      description: "Cross-platform mobile development with elegant UIs.",
    },
    {
      icon: "⚛️",
      title: "React",
      description: "SPA development using modern frontend practices.",
    },
    {
      icon: "🧩",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI building.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Node.js",
      description: "Backend development using event-driven architecture.",
    },
    {
      icon: "📊",
      title: "SQL",
      description: "Skilled in querying and managing relational databases.",
    },
    {
      icon: "🧠",
      title: "DSA & OOPS",
      description: "Strong in algorithms, data structures, and object-oriented design.",
    }
  ];

  return (
    <div className="py-20 ">
      <h1 className="text-lg md:text-4xl mb-10 text-black dark:text-white max-w-7xl mx-auto">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <Skill key={skill.title} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
}

const Skill = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8) && "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
