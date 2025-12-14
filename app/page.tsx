import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Short description",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Short description",
    image: "/images/project2.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="px-4 py-12 max-w-6xl mx-auto">
        <Hero />
      </section>

      <section id="projects" className="px-4 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p>
            JavaScript, TypeScript, React, Next.js, Tailwind, Docker, Git, CI/CD
          </p>
        </div>
      </section>

      <section id="experience" className="px-4 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p>Internships, projects, and relevant coursework go here.</p>
        </div>
      </section>

      <section id="contact" className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
          <form className="space-y-4 max-w-xl">
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full p-2 border rounded"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Message"
            ></textarea>
            <button className="px-4 py-2 bg-black text-white rounded">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
