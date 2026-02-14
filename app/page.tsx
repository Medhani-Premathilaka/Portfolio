import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SkillPill from "@/components/ui/skill-pill";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }} className="min-h-screen">
      <section id="home" className="px-4 py-12  max-w-6xl mx-auto">
        <Hero />
      </section>

      <section id="projects" className="px-4 py-12 ">
        <Projects />
      </section>

      <section id="skills" className="px-4  py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-letters mb-8 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/** helper to render a category with ordered pills */}
            {(() => {
              type SkillStatus =
                | "pro"
                | "intermediate"
                | "inprogress"
                | "beginner";

              const statusOrder: Record<SkillStatus, number> = {
                pro: 0,
                intermediate: 1,
                inprogress: 2,
                beginner: 3,
              };

              const renderCategory = (
                title: string,
                skills: { name: string; status: SkillStatus }[]
              ) => {
                const sorted = skills.sort(
                  (a, b) =>
                    (statusOrder[a.status] ?? 9) -
                      (statusOrder[b.status] ?? 9) ||
                    a.name.localeCompare(b.name)
                );
                return (
                  <div>
                    <h3 className="font-semibold mb-3">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {sorted.map((s) => (
                        <SkillPill key={s.name} variant={s.status}>
                          {s.name}
                        </SkillPill>
                      ))}
                    </div>
                  </div>
                );
              };

              return (
                <>
                  {renderCategory("Languages", [
                    { name: "TypeScript", status: "pro" },
                    { name: "JavaScript", status: "pro" },
                    { name: "Java", status: "intermediate" },
                    { name: "C", status: "intermediate" },
                    { name: "SQL", status: "intermediate" },
                  ])}

                  {renderCategory("Frontend", [
                    { name: "React", status: "pro" },
                    { name: "Next.js", status: "pro" },
                    { name: "Tailwind CSS", status: "intermediate" },
                    { name: "MUI / Shadcn", status: "intermediate" },
                    { name: "HTML & CSS", status: "pro" },
                  ])}

                  {renderCategory("Backend", [
                    { name: "Node.js", status: "intermediate" },
                    { name: "Express", status: "intermediate" },
                    { name: "Spring Boot", status: "beginner" },
                    { name: "REST APIs", status: "intermediate" },
                    { name: "JWT Auth", status: "intermediate" },
                  ])}

                  {renderCategory("DevOps & Cloud", [
                    { name: "Docker", status: "pro" },
                    { name: "GitHub Actions", status: "intermediate" },
                    { name: "AWS (EC2/S3/IAM)", status: "intermediate" },
                    { name: "CI/CD", status: "intermediate" },
                    { name: "Terraform", status: "intermediate" },
                    { name: "RDS", status: "intermediate" },
                    { name: "Nginx", status: "beginner" },
                  ])}

                  {renderCategory("Databases", [
                    { name: "PostgreSQL", status: "intermediate" },
                    { name: "MySQL", status: "intermediate" },
                    { name: "MongoDB", status: "beginner" },
                    { name: "DynamoDB", status: "intermediate" },
                    { name: "Firebase / Supabase", status: "intermediate" },
                  ])}

                  {renderCategory("Tools & Platforms", [
                    { name: "Git & GitHub", status: "pro" },
                    { name: "Vercel", status: "intermediate" },
                    { name: "NPM", status: "intermediate" },
                    { name: "Maven", status: "beginner" },
                    { name: "Unity / OpenGL", status: "beginner" },
                  ])}

                  {renderCategory("OS & Fundamentals", [
                    { name: "Linux", status: "intermediate" },
                    { name: "Networking basics", status: "intermediate" },
                    { name: "System design basics", status: "intermediate" },
                  ])}
                </>
              );
            })()}
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
