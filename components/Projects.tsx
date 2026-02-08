import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
  id: 1,
  title: 'HS Bridal Wears - Ongoing',
  description:
    'A cloud-based ERP for HS Bridal Wears, managing employees, inventory, billing, and notifications across multiple shops.Integrated AI-driven RAG application.',
  image: '/images/HiruSandu.png',
  tech: [
    'React',
    'TypeScript',
    'Spring Boot',
    'Java',
    'RDS(PostgreSQL)',
    'JWT',
    'Kafka',
    'Docker',
    'AWS EC2',
    'Nginx',
    'AWS Lambda',
    'GitHub Actions',
    'RAG',
    'OpenAI API'
  ],
  github: 'https://github.com/ZentroThread',
  live: 'https://fabriq-frontend.vercel.app/'
}
,
  {
  id: 2,
  title: 'WorkMate360',
  description:
    'A secure, role-based full-stack employee management platform deployed on AWS. Built with Spring Boot and React, featuring JWT authentication, BCrypt password hashing, Nginx reverse proxy with HTTPS, and cloud-hosted PostgreSQL via Supabase.',
  image: '/images/workmate360.png',
  tech: [
    'React',
    'TypeScript',
    'Spring Boot',
    'Java',
    'AWS EC2',
    'Supabase (PostgreSQL)',
    'JWT',
    'BCrypt',
    'Nginx',
    'Vercel',
    'GitHub Actions'
  ],
  github: 'https://github.com/Medhani-Premathilaka/WorkMate360',
  live: 'https://workmate360.live'
}
,
  {
  id: 3,
  title: 'DineEase',
  description:
    'A smart canteen management system built to reduce queue times by streamlining food ordering and operations. Designed using MVC architecture and core design patterns to ensure clean structure, scalability, and maintainability in a real-world academic setting.',
  image: '/images/dineease1.png',
  tech: [
    'C# (.NET Framework)',
    'Guna UI2',
    'SQL Server (AWS)',
    'MVC Architecture',
    'Singleton Pattern',
    'Factory Method Pattern',
    'Git',
    'GitHub',
    'Figma'
  ],
  github: 'https://github.com/Medhani-Premathilaka/DineEase'
}
,
  {
  id: 4,
  title: 'FisherMate',
  description:
    'A desktop-based management system developed to support fisheries-related operations, featuring a structured JavaFX UI and database-driven functionality. Built as a team project with focus on data handling, user interaction, and clean application flow.',
  image: '/images/fishermate.png',
  tech: [
    'Java',
    'JavaFX',
    'Scene Builder',
    'JDBC',
    'MySQL',
    'XAMPP',
    'SQL',
    'Git',
    'GitHub'
  ],
  github: 'https://github.com/IndikaMadhushan/FisherMate'
}
,
  
]

function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-letters  mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}

export default Projects