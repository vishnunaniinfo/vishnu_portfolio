"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of the
            channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
          <div className="gradient-border p-6 md:p-8 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Send Me a Message</h3>

            {isSuccess && (
              <div className="mb-6 p-4 bg-accent/20 border border-accent rounded-md text-accent">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full neon-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4 glow">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:vishnuvardhanburri19@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vishnuvardhanburri19@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4 glow-secondary">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/vishnu-vardhanburri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    linkedin.com/in/vishnu-vardhanburri
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-full mr-4 glow-accent">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a
                    href="https://github.com/vishnunaniinfo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    github.com/vishnunaniinfo
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/vishnunaniinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors hover:glow"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/vishnu-vardhanburri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors hover:glow-secondary"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:vishnuvardhanburri19@gmail.com"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors hover:glow-accent"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

