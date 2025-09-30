"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Award } from "lucide-react"

const Certifications = () => {
  const certifications = [
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
      name: "SERTIFIKAT WEB PROGRAMMING PELATIHAN IT BOOTCAMP",
      issuer: "PELATIHAN IT BOOTCAMP",
      issueDate: "juni 2024",
      expiryDate: "2027",
      logo: "/img/PELATIHAN IT BOOTCAMP.png",
      credentialUrl: "https://drive.google.com/file/d/1k7oeXzLmFkbnDIWyiRhS6xPWuLwbsF-1/view?usp=sharing",
    },
    {
      id: 4,
      name: "C++ cho người mới bắt đầu",
      issuer: "CodeLearn",
      issueDate: "September 2024",
      expiryDate: "sekarang",
      logo: "/img/codelearn.png",
      credentialUrl: "https://drive.google.com/file/d/1zOtRKsrrc51tGqLr6HdaH96ENMcUwDkr/view?usp=sharing",
    },
    {
      id: 5,
      name: "SEMINAR NASIONAL ICONIC IT 2024",
      issuer: "HMIF UNSIL (Himpunan Mahasiswa Informatika Universitas Siliwangi)",
      issueDate: "september 2024",
      expiryDate: "sekarang",
      logo: "/img/iconic it.png",
      credentialUrl: "https://drive.google.com/file/d/1rWuuhjTgcM2iz4mTag4D_yOJ2yhH7sm3/view?usp=sharing",
    },
    {
      id: 6,
      name: "augmented reality",
      issuer: "HMIF UNSIL (Himpunan Mahasiswa Informatika Universitas Siliwangi)",
      issueDate: "Mei 2022",
      expiryDate: "2024",
      logo: "img/AR IT.png",
      credentialUrl: "https://drive.google.com/file/d/13Xk5vd-tRygXvjkM-EEvoZJBXyExamlk/view?usp=sharing",
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
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Sertifikasi</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sertifikasi profesional yang mendukung keahlian dan kompetensi di bidang teknologi informasi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.issuer}
                    className="w-16 h-16 rounded-lg object-cover bg-white p-2"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">{cert.name}</h3>
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Lihat Kredensial
                    </motion.a>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Diterbitkan: {cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Berlaku hingga: {cert.expiryDate}</span>
                    </div>
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

export default Certifications
