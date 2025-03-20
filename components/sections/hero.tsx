"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Typewriter from "@/components/ui/typewriter"
import { ChevronDown, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure hydration is complete before animations
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleButtonClick = () => {
    setIsButtonClicked(true)
    setTimeout(() => setIsButtonClicked(false), 1000)
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 lg:order-1 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-primary text-glow bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Vishnu Vardhan Burri
            </span>
          </h1>
          <div className="text-xl md:text-2xl mb-6 text-muted-foreground h-8">
            {mounted && (
              <Typewriter
                texts={["Full-Stack Developer", "Cybersecurity Specialist", "AI Innovator"]}
                className="text-foreground"
              />
            )}
          </div>
          <p className="text-lg mb-8 max-w-xl text-blue-100">
            Building secure, intelligent, and scalable applications with a focus on cybersecurity and AI integration.
            Passionate about creating innovative solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className={cn(
                "relative overflow-hidden transition-all duration-300 neon-button",
                isButtonClicked && "animate-pulse-glow",
              )}
              onClick={() => {
                handleButtonClick()
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
              {isButtonClicked && <span className="absolute inset-0 bg-primary/20 animate-ping rounded-md" />}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/20 neon-button"
              onClick={handleButtonClick}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
              {isButtonClicked && <span className="absolute inset-0 bg-primary/20 animate-ping rounded-md" />}
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 opacity-40 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 glow">
              <Image src="/images/profile.png" alt="Vishnu Vardhan Burri" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </section>
  )
}

