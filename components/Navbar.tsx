"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Terminal } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { id: "hero", label: "Beranda" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "education", label: "Pendidikan" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "contact", label: "Kontak" },
]

const sectionIds = navItems.map((item) => item.id)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -79% 0px" }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center justify-between gap-3 w-full max-w-5xl rounded-2xl px-3 sm:px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "surface shadow-lg shadow-black/5"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 pl-1"
          aria-label="Ke beranda"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/30">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-semibold">
            friza
            <span className="text-primary">.dev</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[4.75rem] left-4 right-4 md:hidden"
          >
            <div className="surface rounded-2xl p-2 shadow-xl shadow-black/10">
              {navItems.map((item) => {
                const active = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-xs text-primary">0{navItems.indexOf(item) + 1}</span>
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
