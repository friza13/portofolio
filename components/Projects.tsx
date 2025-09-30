"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Users } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EDUBOT",
      description:
        "EduBot adalah aplikasi desktop AI untuk Linux yang membantu pengguna memahami kode, membuat skrip, dan memberikan bantuan terminal dengan teknologi ChatGPT,gemini, dan deepseek.",
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
       "Web Status Server adalah aplikasi monitoring server berbasis Node.js yang menampilkan informasi status sistem secara real-time melalui dashboard web yang interaktif.",
      image: "img/server.png",
      technologies: ["Node.js", "Express", "Socket.io", "EJS", "Bootstrap"],
      contributors: 2,
      githubUrl: "https://github.com/friza13/monitoring-server.git",
      demoUrl: "https://monitoring.fs-server.icu/",
      contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg "],
    },
    {
      id: 3,
      title: "suga server",
      description:
        "Suga Server adalah server pribadi yang menyediakan berbagai layanan seperti web server, file sharing, dan aplikasi web dengan teknologi Docker, Nginx, Samba, Node.js, React, MySQL, dan PHP.",
      image: "/img/suga_server.png",
      technologies: ["Linux", "Docker", "Nginx", "Samba", "Node.js", "React", "Mysql", "php"],
      contributors: 2,
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg"],
    },
    {
      id: 4,
      title: "mishell edu",
      description:
        "Mishell-EDU adalah custom shell untuk Linux yang ditulis dalam C. Dilengkapi integrasi Google Gemini AI untuk menerjemahkan bahasa manusia menjadi perintah terminal, serta memiliki fitur monitoring sistem dan utilitas jaringan.",
      image: "/img/mishell-edu.png",
      technologies: ["C", "Linux", "Google Gemini API", "Terminal", "Monitoring"],
      contributors: 2,
      githubUrl: "https://github.com/friza13/MISHELL-EDU.git",
      demoUrl: "https://demo.com",
      contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg"],
    },
    {
      id: 5,
      title: "system zakat",
      description: 
        "Web Zakat Laravel adalah aplikasi manajemen zakat berbasis Laravel yang memudahkan pencatatan, penghitungan, dan distribusi zakat secara digital, lengkap dengan fitur laporan dan konversi zakat uang ke beras sesuai standar.",
      image: "/img/zakat.png",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vue.js"],
      contributors: 3,
      githubUrl: "https://github.com/friza13/zakat_laravel.git",
      demoUrl: "https://zakat.fs-server.icu/",
      contributorsPhoto: ["/img/friza.jpg", "/img/zikri.jpg", "/img/dea.jpg"],
    },
    {
      id: 6,
      title: "eduword",
      description: 
        "EduWord adalah aplikasi pengolah kata mirip Microsoft Word untuk Linux, dibuat dengan C++ dan Qt, yang mendukung pemformatan teks, pengelolaan dokumen, dan pencetakan.",
      image: "/img/eduword.png",
      technologies: ["C++", "Qt", "Linux", "Pemrograman GUI"],
      contributors: 1,
      githubUrl: "https://github.com/friza13/eduword.git",
      demoUrl: "https://demo.com",
      contributorsPhoto: ["/img/friza.jpg"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Proyek Unggulan</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan, menunjukkan keahlian dalam berbagai teknologi dan
            domain.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{project.contributors} kontributor</span>
                  </div>
                  {/* Foto kontributor */}
                  <div className="flex gap-1 mt-2">
                    {project.contributorsPhoto && project.contributorsPhoto.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt="Contributor"
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700 object-cover"
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
