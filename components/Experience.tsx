"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import SectionHeading from "./SectionHeading"

const experiencesData = [
  {
    id: 1,
    position: "Coming Soon",
    company: "Coming Soon",
    type: "Coming Soon",
    period: "Coming Soon",
    location: "Coming Soon",
    description: "Coming Soon",
    skills: ["Coming Soon"],
  },
]

const isPlaceholder =
  experiencesData.length === 1 && experiencesData[0].position === "Coming Soon"

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* subtle dotted bg */}
      <div className="absolute inset-0 -z-10 bg-dots mask-fade-b opacity-40" />

      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeading
          kicker="experience"
          title="Pengalaman Kerja"
          description="Perjalanan karier saya dalam teknologi informasi dan rekayasa sistem."
        />

        {isPlaceholder ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border surface"
          >
            {/* terminal chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </span>
              <span className="ml-1 font-mono text-xs text-muted-foreground">~/experience</span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> git log --oneline experience/
              </p>
              <p className="text-foreground">
                <span className="text-violet-400">›</span> Sedang membangun jejak karier...
              </p>
              <p className="text-muted-foreground">
                Saat ini fokus mengasah skill lewat sertifikasi & proyek nyata.
              </p>
              <p className="pt-2 text-foreground">
                Segera hadir
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" />
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="relative mx-auto max-w-3xl">
            {/* timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-border to-transparent md:left-1/2" />

            <div className="space-y-10">
              {experiencesData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
                >
                  {/* node */}
                  <span className="absolute left-2.5 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 ring-4 ring-background md:left-1/2" />

                  <div className={index % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                    <div className="border-glow rounded-2xl border border-border surface p-6">
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-xs text-primary">
                        <Briefcase className="h-3 w-3" />
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-bold">{exp.position}</h3>
                      <p className="font-medium text-primary">{exp.company}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground md:justify-end">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5 md:justify-end">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
