"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
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

  // Example of experience data structure:
  // {
  //   id: 1,
  //   position: "Senior System Engineer",
  //   company: "PT. Tech Solutions Indonesia",
  //   type: "Full-time",
  //   period: "Januari 2024 - Sekarang",
  //   location: "Jakarta, Indonesia",
  //   description:
  //     "Memimpin tim dalam merancang dan mengimplementasikan infrastruktur sistem yang scalable. Bertanggung jawab atas optimasi performa sistem dan keamanan jaringan.",
  //   skills: ["Linux", "Docker", "Kubernetes", "AWS", "Terraform", "Monitoring"],
  // }

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

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Pengalaman Kerja</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Perjalanan karir saya dalam bidang teknologi informasi dan pengembangan sistem.
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

            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-20 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience
