"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, ArrowUp, Terminal } from "lucide-react"

const socialLinksData = [
  { icon: Github, href: "https://github.com/friza13", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/friza-tri-maulana-a09387368/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/friza_trim", label: "Instagram" },
  { icon: Mail, href: "mailto:frizatrimaulana@gmail.com", label: "Email" },
]

const navLinks = [
  { id: "hero", label: "Beranda" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "education", label: "Pendidikan" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "contact", label: "Kontak" },
]

const Footer = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-30" />

      <div className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_auto]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="font-mono text-base font-semibold">
                friza<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              System Administrator, Software Developer & Network Engineer berbasis di Indonesia.
              Membangun sistem yang stabil, aman, dan efisien.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinksData.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="kicker mb-4">{"// navigasi"}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="flex md:justify-end">
            <button
              onClick={scrollTop}
              className="group flex h-fit items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Ke Atas
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left"
        >
          <p>© {new Date().getFullYear()} Friza Tri Maulana. All rights reserved.</p>
          <p className="font-mono text-xs">
            Built with <span className="text-primary">Next.js</span> ·{" "}
            <span className="text-primary">Tailwind</span> ·{" "}
            <span className="text-primary">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
