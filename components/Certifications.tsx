"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, BadgeCheck } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./SectionHeading"

const certificationsData = [
  {
    id: 1,
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    issueDate: "Maret 2025",
    expiryDate: "2028",
    logo: "/img/mtcna.png",
    credentialUrl: "https://mikrotik.com/training/certificates/c464994c30231180b9ce",
  },
  {
    id: 2,
    name: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    issueDate: "Januari 2025",
    expiryDate: "2028",
    logo: "/img/redhat_rha.png",
    credentialUrl: "https://drive.google.com/file/d/1GXVB2uL866yeVdwtnxinbx64o6P4xK8c/view?usp=sharing",
  },
  {
    id: 3,
    name: "Web Programming — Pelatihan IT Bootcamp",
    issuer: "Pelatihan IT Bootcamp",
    issueDate: "Juni 2024",
    expiryDate: "2027",
    logo: "/img/PELATIHAN IT BOOTCAMP.png",
    credentialUrl: "https://drive.google.com/file/d/1k7oeXzLmFkbnDIWyiRhS6xPWuLwbsF-1/view?usp=sharing",
  },
  {
    id: 4,
    name: "C++ cho người mới bắt đầu",
    issuer: "CodeLearn",
    issueDate: "September 2024",
    expiryDate: "Sekarang",
    logo: "/img/codelearn.png",
    credentialUrl: "https://drive.google.com/file/d/1zOtRKsrrc51tGqLr6HdaH96ENMcUwDkr/view?usp=sharing",
  },
  {
    id: 5,
    name: "Seminar Nasional ICONIC IT 2024",
    issuer: "HMIF UNSIL",
    issueDate: "September 2024",
    expiryDate: "Sekarang",
    logo: "/img/iconic it.png",
    credentialUrl: "https://drive.google.com/file/d/1rWuuhjTgcM2iz4mTag4D_yOJ2yhH7sm3/view?usp=sharing",
  },
  {
    id: 6,
    name: "Augmented Reality",
    issuer: "HMIF UNSIL",
    issueDate: "Mei 2022",
    expiryDate: "2024",
    logo: "/img/AR IT.png",
    credentialUrl: "https://drive.google.com/file/d/13Xk5vd-tRygXvjkM-EEvoZJBXyExamlk/view?usp=sharing",
  },
]

const encode = (path: string) => path.replace(/ /g, "%20")

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-dots mask-fade-b opacity-40" />

      <div className="container mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="certifications"
          title="Sertifikasi"
          description="Sertifikasi profesional yang memvalidasi keahlian dan kompetensi di bidang teknologi informasi."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="border-glow group flex flex-col rounded-2xl border border-border surface p-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                  <Image
                    src={encode(cert.logo)}
                    alt={cert.issuer}
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold leading-snug">{cert.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-primary">
                    <Award className="h-3.5 w-3.5" />
                    {cert.issuer}
                  </p>
                </div>

                <BadgeCheck className="h-5 w-5 flex-shrink-0 text-emerald-500" />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">issued:</span> {cert.issueDate}
                  <span className="mx-1.5 text-border">|</span>
                  <span className="text-primary">valid:</span> {cert.expiryDate}
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Kredensial
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
