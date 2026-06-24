"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  /** Mono kicker text, e.g. "projects" → rendered as "// projects" */
  kicker: string
  title: string
  description?: string
  align?: "center" | "left"
}

const SectionHeading = ({ kicker, title, description, align = "center" }: SectionHeadingProps) => {
  const isCenter = align === "center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-14`}
    >
      <p className="kicker mb-3">
        <span className="text-muted-foreground">{"// "}</span>
        {kicker}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-muted-foreground leading-relaxed ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
