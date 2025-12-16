import ProjectCard from '@/components/ProjectCard'

const projects = [
  { id: 1, title: 'Project 1', description: '...', image: '/images/project1.png' },
  { id: 2, title: 'Project 2', description: '...', image: '/images/project2.png' },
]

export default function Projects() {
  return (
    <div className="container mx-auto">
      <h1>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}