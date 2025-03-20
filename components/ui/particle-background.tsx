"use client"

import { useEffect, useRef } from "react"

// Particle class definition moved to the top
class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 1 - 0.5
    this.speedY = Math.random() * 1 - 0.5

    // Enhanced blue color palette
    const colors = [
      "rgba(59, 130, 246, 0.6)", // primary blue
      "rgba(14, 165, 233, 0.5)", // sky blue
      "rgba(99, 102, 241, 0.5)", // indigo
      "rgba(16, 185, 129, 0.4)", // accent
    ]
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.canvas.width) this.x = 0
    else if (this.x < 0) this.x = this.canvas.width

    if (this.y > this.canvas.height) this.y = 0
    else if (this.y < 0) this.y = this.canvas.height
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Set canvas size
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1

      // Set display size (css pixels)
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"

      // Set actual size in memory (scaled for device pixel ratio)
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio

      // Scale context to match device pixel ratio
      ctx.scale(devicePixelRatio, devicePixelRatio)

      initParticles()
    }

    // Initialize particles
    function initParticles() {
      particles = []
      // Adjust particle count based on screen size
      const particleCount = Math.min(Math.max(10, Math.floor((window.innerWidth * window.innerHeight) / 8000)), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas))
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)
      }

      // Draw connections
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Connect nearby particles with lines
    function connectParticles() {
      // Adjust max distance based on screen size
      const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.15

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ display: "block" }} />
}

