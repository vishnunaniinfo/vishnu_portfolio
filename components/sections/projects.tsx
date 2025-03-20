"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import AnimatedCard from "@/components/ui/animated-card"
import { Button } from "@/components/ui/button"
import { Eye, Github, Scan, BarChart3, Bot, Gamepad2 } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Face Detection System",
    description:
      "Real-time facial recognition using deep learning algorithms with privacy-focused design and high accuracy detection.",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Scan className="h-6 w-6" />,
    tags: ["Python", "TensorFlow", "OpenCV", "React"],
    demoUrl: "#",
    githubUrl: "#",
    variant: "primary" as const,
  },
  {
    title: "Full-Stack Security Dashboard",
    description:
      "Live monitoring & security analytics platform with real-time threat detection and comprehensive visualization tools.",
    image: "/placeholder.svg?height=400&width=600",
    icon: <BarChart3 className="h-6 w-6" />,
    tags: ["React", "Node.js", "D3.js", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
    variant: "secondary" as const,
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Intelligent automation for customer interaction using natural language processing and machine learning.",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Bot className="h-6 w-6" />,
    tags: ["Python", "NLP", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    variant: "accent" as const,
  },
  {
    title: "Game Development Project",
    description:
      "Interactive gaming experience built with modern game development frameworks and real-time multiplayer capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Gamepad2 className="h-6 w-6" />,
    tags: ["Unity", "C#", "WebGL", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#",
    variant: "primary" as const,
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 768)

  // Handle touch events for mobile
  const handleTouchStart = (index: number) => {
    if (isMobile) {
      setActiveProject(index === activeProject ? null : index)
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            PORTFOLIO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my technical projects demonstrating expertise in full-stack development, security, AI, and
            more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              glowColor={project.variant}
              className="h-full"
              onMouseEnter={() => !isMobile && setActiveProject(index)}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-md" onClick={() => handleTouchStart(index)}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {activeProject === index && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/20">
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/20">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center mb-2">
                <div className={`text-${project.variant} mr-2`}>{project.icon}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-secondary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

