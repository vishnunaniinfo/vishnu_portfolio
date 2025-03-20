import { Badge } from "@/components/ui/badge"
import SkillBadge from "@/components/ui/skill-badge"
import AnimatedCard from "@/components/ui/animated-card"
import { Code, Database, Network, Server, Brain, Users } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Java", "C++", "C", "TypeScript", "JavaScript", "R"],
    variant: "primary" as const,
  },
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    variant: "secondary" as const,
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "RESTful APIs"],
    variant: "accent" as const,
  },
  {
    name: "Security & Networking",
    icon: <Network className="h-6 w-6" />,
    skills: ["CEH", "CCSP", "CCNA", "Network Security", "Cloud Security"],
    variant: "primary" as const,
  },
  {
    name: "Cloud & DevOps",
    icon: <Database className="h-6 w-6" />,
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    variant: "secondary" as const,
  },
  {
    name: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: ["NLP", "Face Detection", "Chatbots", "Computer Vision"],
    variant: "accent" as const,
  },
  {
    name: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: ["Problem-Solving", "Communication", "Leadership", "Adaptability"],
    variant: "primary" as const,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            EXPERTISE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical & Soft <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and interpersonal skills that enable me to build secure, scalable, and
            innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={index} glowColor={category.variant} className="h-full">
              <div className="flex items-center mb-4">
                <div className={`text-${category.variant} mr-2`}>{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill} variant={category.variant} />
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

