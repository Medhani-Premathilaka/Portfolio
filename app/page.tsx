import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="px-4 py-12 max-w-6xl mx-auto">
        <Hero />
      </section>

      <section id="projects" className="px-4 py-12 bg-slate-50">
        <Projects />
      </section>

      <section id="skills" className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-letters mb-8 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Java</li>
                <li>JavaScript / TypeScript</li>
                <li>C, C#</li>
                <li>PHP</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>React, Next.js</li>
                <li>HTML5, CSS3</li>
                <li>Tailwind CSS, Bootstrap</li>
                <li>MUI, Shadcn</li>
                <li>jQuery</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Node.js, Express.js</li>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>RESTful APIs</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            {/* DevOps & Cloud */}
            <div>
              <h3 className="font-semibold mb-3">DevOps & Cloud</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Docker</li>
                <li>GitHub Actions, CI/CD pipelines</li>
                <li>AWS EC2, S3, IAM</li>
                <li>Nginx</li>
                <li>Apache Tomcat</li>
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="font-semibold mb-3">Databases</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Amazon DynamoDB</li>
                <li>Firebase, Supabase</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="font-semibold mb-3">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Git & GitHub</li>
                <li>NPM</li>
                <li>Vercel</li>
                <li>Apache Maven</li>
                <li>Unity, OpenGL</li>
              </ul>
            </div>

            {/* OS & Fundamentals */}
            <div>
              <h3 className="font-semibold mb-3">OS & Fundamentals</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Linux (basic commands)</li>
                <li>Networking fundamentals</li>
                <li>System design basics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen py-20 px-4">
        <Experience />
      </section>

      <section id="contact" className="min-h-screen py-20 px-4">
        <Contact />
      </section>
    </main>
  );
}
