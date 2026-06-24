"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"

const educationsData = [
  {
    id: 1,
    institution: "Universitas Siliwangi",
    degree: "Informatika",
    period: "2023 - sekarang",
    logo: "/img/LOGO-UNSIL.png",
    description: "Fokus pada pengembangan software, jaringan komputer, dan sistem informasi. IPK: 3.7/4.00",
  },
  {
    id: 2,
    institution: "SMA Negeri 1 Ciamis",
    degree: " MIPA (Matematika dan Ilmu Pengetahuan Alam)",
    period: "2020 - 2023",
    logo: "/img/Logo_SMAN_1_Ciamis.svg.png",
    description: "Mengembangkan fondasi yang kuat dalam berpikir logis, analitis, dan pemecahan masalah melalui studi mendalam di bidang Matematika dan Ilmu Alam.",
  },
  {
    id: 3,
    institution: "SMP Negeri 5 Ciamis",
    degree: "Sekolah Menengah Pertama",
    period: "2017 - 2020",
    logo: "/img/Logo_SMPN_5_Ciamis.svg.png",
    description: "Pendidikan menengah pertama dengan fokus pada dasar-dasar ilmu pengetahuan dan teknologi.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Pendidikan</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Latar belakang pendidikan yang mendukung perjalanan karir di bidang teknologi informasi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {educationsData.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-20 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 relative w-12 h-12 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={edu.logo ? edu.logo.replace(/ /g, "%20") : "/placeholder.svg"}
                        alt={edu.institution}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-1 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-5 h-5 text-blue-500" />
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.degree}</p>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
