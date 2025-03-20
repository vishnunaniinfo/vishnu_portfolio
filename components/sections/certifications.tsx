import { Badge } from "@/components/ui/badge"
import AnimatedCard from "@/components/ui/animated-card"
import { Shield, Cloud, Network, Code } from "lucide-react"

const certifications = [
  {
    name: "CCSP (Certified Cloud Security Professional)",
    icon: <Shield className="h-6 w-6" />,
    description: "Advanced security skills for cloud environments",
    variant: "primary" as const,
  },
  {
    name: "CEH (Certified Ethical Hacker)",
    icon: <Shield className="h-6 w-6" />,
    description: "Expertise in ethical hacking and security testing",
    variant: "secondary" as const,
  },
  {
    name: "AWS Certified",
    icon: <Cloud className="h-6 w-6" />,
    description: "Proficiency in Amazon Web Services cloud solutions",
    variant: "accent" as const,
  },
  {
    name: "Google Cloud Certified",
    icon: <Cloud className="h-6 w-6" />,
    description: "Expertise in Google Cloud Platform services",
    variant: "primary" as const,
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    icon: <Network className="h-6 w-6" />,
    description: "Network infrastructure and troubleshooting skills",
    variant: "secondary" as const,
  },
  {
    name: "TypeScript Certification (Skills Up)",
    icon: <Code className="h-6 w-6" />,
    description: "Advanced TypeScript development expertise",
    variant: "accent" as const,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-2">
          CREDENTIALS
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional <span className="text-primary text-glow">Certifications</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industry-recognized certifications that validate my expertise in various domains of technology and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedCard key={index} glowColor={cert.variant} className="h-full">
            <div className="flex items-center mb-4">
              <div className={`text-${cert.variant} mr-2`}>{cert.icon}</div>
              <h3 className="text-lg font-semibold">{cert.name}</h3>
            </div>
            <p className="text-muted-foreground">{cert.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}

