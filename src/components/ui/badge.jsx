import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20",
        secondary:
          "border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-slate-700/80",
        destructive:
          "border-transparent bg-rose-500/20 text-rose-300 border-rose-500/30",
        outline: "text-slate-300 border-slate-700",
        accent: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20",
        gold: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
