import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export default function SkillBadge({ name, className, variant = "primary" }: SkillBadgeProps) {
  const variantClasses = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
  }

  return (
    <div
      className={cn(
        "px-3 py-1 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105",
        variantClasses[variant],
        className,
      )}
    >
      {name}
    </div>
  )
}

