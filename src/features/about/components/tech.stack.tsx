import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

export default function TechStack() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Tech Stack
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
