"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Mail, Github, Linkedin, Instagram, ArrowDown, MapPin } from "lucide-react"
import Image from "next/image"

const roles = [
  "Web Developer",
  "C++ Programmer",
  "Network Engineer",
  "System Administrator",
  "Pythonista",
]

const socials = [
  { icon: Github, href: "https://github.com/friza13", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/friza-tri-maulana-a09387368/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/friza_trim", label: "Instagram" },
]

const stats = [
  { value: "2+", label: "Sertifikasi Pro" },
  { value: "6+", label: "Proyek" },
  { value: "3.7", label: "IPK / 4.00" },
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial-faded opacity-70" />
        <div className="glow-blob absolute -top-20 -left-20 h-96 w-96 rounded-full bg-indigo-500/30" />
        <div className="glow-blob absolute top-40 right-0 h-96 w-96 rounded-full bg-violet-500/20" />
      </div>

      <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        {/* Left — text */}
        <div className="text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Tersedia untuk peluang baru
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block font-mono text-base sm:text-lg font-normal text-muted-foreground mb-2">
              <span className="text-primary">const</span> name <span className="text-primary">=</span>
            </span>
            <span className="text-gradient">Friza Tri Maulana</span>
          </motion.h1>

          {/* Cycling role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 flex items-center justify-center lg:justify-start gap-2 font-mono text-lg sm:text-xl"
          >
            <span className="text-muted-foreground">$</span>
            <span className="text-muted-foreground">role</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-semibold text-foreground"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
            <span className="inline-block w-2 h-5 bg-primary animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed"
          >
            Mahasiswa Informatika Universitas Siliwangi dengan fokus pada rekayasa
            infrastruktur digital. Spesialis Administrasi Sistem Linux{" "}
            <span className="text-foreground font-medium">(Red Hat Certified)</span> dan
            Rekayasa Jaringan{" "}
            <span className="text-foreground font-medium">(MTCNA Certified)</span> — merancang
            sistem yang stabil, aman, dan efisien. Tertarik pada persimpangan jaringan,
            keamanan siber, dan kecerdasan buatan.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" />
            Ciamis, Jawa Barat — Indonesia
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1HpoeFvFBeIWm8uv9MG2sGT4vroNrnppG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 font-medium text-foreground backdrop-blur transition-all hover:bg-secondary hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Unduh CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-all hover:text-primary hover:border-primary/50 hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 blur-2xl" />

            {/* Photo card */}
            <div className="border-glow relative rounded-3xl border border-border surface p-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/img/friza.jpg"
                  alt="Friza Tri Maulana"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 384px"
                  className="object-cover"
                />
                {/* subtle top gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Terminal-ish caption bar */}
              <div className="mt-3 flex items-center gap-2 px-2 pb-1 font-mono text-xs text-muted-foreground">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </span>
                <span className="ml-1">~/friza — whoami</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-4 top-10 surface rounded-xl px-3 py-2 text-xs font-mono shadow-lg"
            >
              <span className="text-primary">●</span> Red Hat Certified
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-3 bottom-16 surface rounded-xl px-3 py-2 text-xs font-mono shadow-lg"
            >
              <span className="text-violet-400">◆</span> MTCNA
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex items-center gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-mono text-xl font-bold text-gradient">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
        <button
          onClick={() => scrollTo("projects")}
          aria-label="Scroll ke bawah"
          className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary animate-float"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
