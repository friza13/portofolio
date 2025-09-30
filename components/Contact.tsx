"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "frizatrimaulana@gmail.com",
      href: "mailto:frizatrimaulana@gmail.com",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 815-7369-3942",
      href: "tel:+6281573693942",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jl. Karya Bakti No.51, Kertasari, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46213",
      href: "https://maps.app.goo.gl/gE6CiVMmw4WKn7tWA",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Hubungi Saya</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mari berkolaborasi! Saya selalu terbuka untuk mendiskusikan proyek baru, peluang kerja, atau sekadar berbagi
            ide tentang teknologi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.label === "Lokasi" ? "_blank" : undefined}
                  rel={item.label === "Lokasi" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Atau kirim pesan langsung melalui email untuk diskusi lebih lanjut
              </p>
              <motion.a
                href="mailto:muhammad.zaki@email.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Kirim Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
