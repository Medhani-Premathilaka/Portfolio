"use client";

import React from "react";
import { Calendar, MapPin, Trophy, Award } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
  ongoing?: boolean;
  type?: "project" | "hackathon" | "award";
}

function ExperienceItem({
  title,
  organization,
  location,
  period,
  description,
  ongoing,
  type = "project",
}: ExperienceItemProps) {
  const getIcon = () => {
    switch (type) {
      case "award":
        return <Trophy size={16} className="text-yellow-600" />;
      case "hackathon":
        return <Award size={16} className="text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-8 border-l-2 border-letters pl-6 pb-6 relative">
      {/* Timeline dot */}
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-letters"></div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold text-letters">{title}</h3>
            {ongoing && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                In Progress
              </span>
            )}
            {type !== "project" && (
              <span className="flex items-center gap-1">{getIcon()}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-letters1 mt-1 flex-wrap">
            <span className="font-semibold">{organization}</span>
            

            {location && (
              <>
                <span className="hidden sm:inline">•</span>
                <br />
                <span className="text-red-400"><MapPin size={14} /></span>
                
                <span className="flex items-center  gap-1">
                  
                  {location}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 text-white border-2 p-3 rounded-2xl bg-letters/40   border-letters text-sm mt-2 md:mt-0">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
      </div>

      <ul className="list-disc list-inside space-y-2 text-letters1  mt-3">
        {description.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Full-Stack Developer - Final Year Project",
      organization: "Hirusandu Bridal Ware",
      location: "Gampaha, Sri Lanka",
      period: "Nov 2025 - Present",
      ongoing: true,
      type: "project",
      description: [
        "Developing multi-tenant SaaS admin portal for bridal wear shop with enterprise-level architecture",
        "Built comprehensive inventory management system with full CRUD operations for bridal attire catalog",
        "Implemented employee salary calculation module and automated report generation system",
        "Integrated WhatsApp Business API for automated customer promotions and marketing campaigns",
        "Architected scalable backend with Java Spring Boot and DynamoDB, utilizing Redis for caching",
        "Established CI/CD pipeline with Docker containerization and GitHub Actions for automated deployments",
        "Tech Stack: React, TypeScript, Zustand, TanStack Query, Java Spring Boot, DynamoDB, Redis, Docker, GitHub Actions",
      ],
    },
    {
      title: "Winner - Road to Rush Coder 3.0 Hackathon",
      organization: "Department of Computer Science , University of Ruhuna",
      location: "Matara, Sri Lanka", // Change to actual location
      period: "Jan 2025", // e.g., "Nov 2024"
      type: "award",
      description: [
        "Won 1st place among 30 participating teams in HackerRank competitive programming challenge",
        "Solved algorithmic problems covering arrays, graphs, dynamic programming, and optimization",
        "Achieved top score through efficient coding and strategic problem selection",
        "Demonstrated strong analytical thinking and teamwork in high-pressure environment",
      ],
    },
    {
      title: "Participant - ROAD TO INSURGEX 1.0 HACKATHON",
      organization: "Department of Computer Science , University of Ruhuna",
      location: "Matara, Sri Lanka", // Change to actual location
      period: "Dec 2023", // e.g., "Aug 2024"
      type: "hackathon",
      description: [
        "Participated in 5-hour competitive programming hackathon on HackerRank platform",
        "Solved multiple algorithmic challenges covering data structures, algorithms, and problem-solving",
        "Collaborated with team members to optimize solutions and debug code under time constraints",
        "Strengthened problem-solving skills and ability to work efficiently under pressure",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-letters mb-2 text-center">
        Experience
      </h2>
      <p className="text-center text-letters1 mb-8">
        Professional work, projects, and achievements
      </p>
      <div className="mt-8">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
