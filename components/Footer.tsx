"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinksData = [
  {
    icon: Github,
    href: "https://github.com/friza13",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/friza-tri-maulana-a09387368/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com", // You can update this later with your real Twitter/X handle
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/friza_trim",
    label: "Instagram",
  },
]

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text mb-6"
          >
           FRIZA TRI MAULANA
          </motion.h3>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinksData.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-gray-600 dark:text-gray-300"
          >
            <p>© {new Date().getFullYear()} FRIZA TRI MAULANA. All rights reserved.</p>
            <p className="text-linecap">
              Dibangun dengan <span className="text-blue-500 font-semibold">Next.js</span>,{" "}
              <span className="text-blue-500 font-semibold">Tailwind CSS</span>, dan{" "}
              <span className="text-blue-500 font-semibold">Framer Motion</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
