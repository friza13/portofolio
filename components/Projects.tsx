"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Users } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./SectionHeading"

const projectsData = [
  {
    id: 1,
    title: "EDUBOT",
    description:
      "Aplikasi desktop AI untuk Linux yang membantu pengguna memahami kode, membuat skrip, dan memberikan bantuan terminal dengan teknologi ChatGPT, Gemini, dan DeepSeek.",
    image: "/img/edubot_icon.png",
    technologies: ["Python", "PyQt5", "ChatGPT API", "Gemini API", "DeepSeek API"],
    contributors: 1,
    githubUrl: "https://github.com/friza13/edubot.git",
    demoUrl: "https://demo.com",
    contributorsPhoto: ["/img/friza.jpg"],
  },
  {
    id: 2,
    title: "Monitoring Server",
    description:
      "Aplikasi monitoring server berbasis Node.js yang menampilkan informasi status sistem secara real-time melalui dashboard web yang interaktif.",
    image: "/img/server.png",
    technologies: ["Node.js", "Express", "Socket.io", "EJS", "Bootstrap"],
    contributors: 2,
    githubUrl: "https://github.com/friza13/monitoring-server.git",
    demoUrl: "https://monitoring.fs-server.icu/",
    contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg"],
  },
  {
    id: 3,
    title: "Suga Server",
    description:
      "Server pribadi yang menyediakan berbagai layanan seperti web server, file sharing, dan aplikasi web dengan teknologi Docker, Nginx, Samba, Node.js, React, MySQL, dan PHP.",
    image: "/img/suga_server.png",
    technologies: ["Linux", "Docker", "Nginx", "Samba", "Node.js", "React", "MySQL", "PHP"],
    contributors: 2,
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg"],
  },
  {
    id: 4,
    title: "Mishell EDU",
    description:
      "Custom shell untuk Linux yang ditulis dalam C. Dilengkapi integrasi Google Gemini AI untuk menerjemahkan bahasa manusia menjadi perintah terminal, serta fitur monitoring sistem dan utilitas jaringan.",
    image: "/img/mishell-edu.png",
    technologies: ["C", "Linux", "Gemini API", "Terminal", "Monitoring"],
    contributors: 2,
    githubUrl: "https://github.com/friza13/MISHELL-EDU.git",
    demoUrl: "https://demo.com",
    contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg"],
  },
  {
    id: 5,
    title: "System Zakat",
    description:
      "Aplikasi manajemen zakat berbasis Laravel yang memudahkan pencatatan, penghitungan, dan distribusi zakat secara digital, lengkap dengan fitur laporan dan konversi zakat uang ke beras sesuai standar.",
    image: "/img/zakat.png",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vue.js"],
    contributors: 3,
    githubUrl: "https://github.com/friza13/zakat_laravel.git",
    demoUrl: "https://zakat.fs-server.icu/",
    contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg", "/img/dea.jpg"],
  },
  {
    id: 6,
    title: "EduWord",
    description:
      "Aplikasi pengolah kata mirip Microsoft Word untuk Linux, dibuat dengan C++ dan Qt, mendukung pemformatan teks, pengelolaan dokumen, dan pencetakan.",
    image: "/img/eduword.png",
    technologies: ["C++", "Qt", "Linux", "GUI"],
    contributors: 1,
    githubUrl: "https://github.com/friza13/eduword.git",
    demoUrl: "https://demo.com",
    contributorsPhoto: ["/img/friza.jpg"],
  },
]

// Placeholder URLs that shouldn't render as real links
const isRealUrl = (url: string) =>
  Boolean(url) && !/^https?:\/\/(www\.)?(demo\.com|github\.com)\/?$/.test(url)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="projects"
          title="Proyek Unggulan"
          description="Pilihan proyek yang menunjukkan keahlian lintas teknologi — dari infrastruktur Linux & jaringan hingga aplikasi desktop dan web."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => {
            const hasRepo = isRealUrl(project.githubUrl)
            const hasDemo = isRealUrl(project.demoUrl)

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="border-glow group relative flex flex-col overflow-hidden rounded-2xl border border-border surface"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-xs text-primary backdrop-blur">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.contributorsPhoto.map((photo, idx) => (
                          <div
                            key={idx}
                            className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-card"
                          >
                            <Image src={photo} alt="Contributor" fill sizes="28px" className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        {project.contributors}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {hasRepo && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Repositori GitHub"
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {hasDemo && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white transition-transform hover:scale-105"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
