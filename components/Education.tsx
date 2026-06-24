"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./SectionHeading"

const educationsData = [
  {
    id: 1,
    institution: "Universitas Siliwangi",
    degree: "S1 Informatika",
    period: "2023 - sekarang",
    logo: "/img/LOGO-UNSIL.png",
    description:
      "Fokus pada pengembangan software, jaringan komputer, dan sistem informasi. IPK: 3.7 / 4.00.",
  },
  {
    id: 2,
    institution: "SMA Negeri 1 Ciamis",
    degree: "MIPA (Matematika & Ilmu Pengetahuan Alam)",
    period: "2020 - 2023",
    logo: "/img/Logo_SMAN_1_Ciamis.svg.png",
    description:
      "Membangun fondasi kuat dalam berpikir logis, analitis, dan pemecahan masalah melalui Matematika dan Ilmu Alam.",
  },
  {
    id: 3,
    institution: "SMP Negeri 5 Ciamis",
    degree: "Sekolah Menengah Pertama",
    period: "2017 - 2020",
    logo: "/img/Logo_SMPN_5_Ciamis.svg.png",
    description:
      "Pendidikan menengah pertama dengan fokus pada dasar-dasar ilmu pengetahuan dan teknologi.",
  },
]

const encode = (path: string) => path.replace(/ /g, "%20")

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeading
          kicker="education"
          title="Pendidikan"
          description="Latar belakang pendidikan yang membentuk fondasi karier di bidang teknologi."
        />

        <div className="relative">
          {/* rail */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-border to-transparent" />

          <div className="space-y-6">
            {educationsData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative pl-14"
              >
                {/* node */}
                <span className="absolute left-5 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 ring-4 ring-background" />

                <div className="border-glow rounded-2xl border border-border surface p-5">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                      <Image
                        src={encode(edu.logo)}
                        alt={edu.institution}
                        fill
                        sizes="56px"
                        className="object-contain p-1.5"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-base font-bold">{edu.institution}</h3>
                        <span className="inline-flex w-fit items-center gap-1 rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                        <GraduationCap className="h-4 w-4" />
                        {edu.degree}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
