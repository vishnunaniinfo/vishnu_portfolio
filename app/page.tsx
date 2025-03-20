import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Certifications from "@/components/sections/certifications"
import Projects from "@/components/sections/projects"
import Hobbies from "@/components/sections/hobbies"
import Contact from "@/components/sections/contact"
import ParticleBackground from "@/components/ui/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto relative z-10">
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </main>
  )
}

