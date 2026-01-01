import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-letters mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 text-sm">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-letters transition-colors"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-letters transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
