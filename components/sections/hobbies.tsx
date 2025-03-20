import { Badge } from "@/components/ui/badge"
import AnimatedCard from "@/components/ui/animated-card"
import { Brain, Shield, Gamepad2, Cloud } from "lucide-react"

const hobbies = [
  {
    name: "AI & Tech Exploration",
    icon: <Brain className="h-6 w-6" />,
    description:
      "Exploring cutting-edge AI technologies and their practical applications in solving real-world problems.",
    variant: "primary" as const,
  },
  {
    name: "Security Research & Ethical Hacking",
    icon: <Shield className="h-6 w-6" />,
    description:
      "Researching security vulnerabilities and participating in ethical hacking challenges to improve cybersecurity knowledge.",
    variant: "secondary" as const,
  },
  {
    name: "Game Development",
    icon: <Gamepad2 className="h-6 w-6" />,
    description:
      "Creating interactive gaming experiences and exploring game mechanics, physics, and storytelling in virtual environments.",
    variant: "accent" as const,
  },
  {
    name: "Cloud & DevOps Automation",
    icon: <Cloud className="h-6 w-6" />,
    description:
      "Building automated cloud infrastructure and exploring DevOps practices for efficient software delivery.",
    variant: "primary" as const,
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-muted/20">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-2">
          INTERESTS
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hobbies & <span className="text-primary text-glow">Interests</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Beyond professional work, these are the areas I'm passionate about and spend time exploring in my personal
          projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {hobbies.map((hobby, index) => (
          <AnimatedCard key={index} glowColor={hobby.variant} className="h-full">
            <div className="flex items-center mb-4">
              <div className={`text-${hobby.variant} mr-2`}>{hobby.icon}</div>
              <h3 className="text-xl font-semibold">{hobby.name}</h3>
            </div>
            <p className="text-muted-foreground">{hobby.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}

