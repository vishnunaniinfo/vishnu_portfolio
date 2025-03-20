"use client"

import type React from "react"

import { useState, useRef, type ReactNode, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  glowColor?: "primary" | "secondary" | "accent"
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function AnimatedCard({
  children,
  className,
  glowColor = "primary",
  onMouseEnter,
  onMouseLeave,
}: AnimatedCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glowing, setGlowing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setGlowing(true)
    if (onMouseEnter) onMouseEnter()
  }

  const handleMouseLeave = () => {
    setGlowing(false)
    setRotation({ x: 0, y: 0 })
    if (onMouseLeave) onMouseLeave()
  }

  const glowClasses = {
    primary: "glow",
    secondary: "glow-secondary",
    accent: "glow-accent",
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "card-3d relative bg-card rounded-lg p-6 transition-all duration-300",
        glowing && !isMobile && glowClasses[glowColor],
        isMobile && "transform-none hover:scale-105",
        className,
      )}
      style={
        !isMobile
          ? {
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

