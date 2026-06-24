"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react"
import SectionHeading from "./SectionHeading"

const contactInfoData = [
  {
    icon: Mail,
    label: "Email",
    value: "frizatrimaulana@gmail.com",
    href: "mailto:frizatrimaulana@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 815-7369-3942",
    href: "tel:+6281573693942",
    external: false,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Ciamis, Jawa Barat, Indonesia",
    href: "https://maps.app.goo.gl/gE6CiVMmw4WKn7tWA",
    external: true,
  },
]

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="contact"
          title="Mari Terhubung"
          description="Terbuka untuk diskusi proyek baru, peluang kerja, atau sekadar berbagi ide tentang teknologi."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="overflow-hidden rounded-3xl border border-border surface"
        >
          <div className="grid md:grid-cols-2">
            {/* Left — CTA */}
            <div className="relative flex flex-col justify-between gap-8 border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="relative">
                <p className="font-mono text-sm text-primary">$ ./contact --me</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  Punya proyek atau ide?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Kirim pesan langsung lewat email — biasanya saya balas dalam 1×24 jam.
                </p>
              </div>
              <a
                href="mailto:frizatrimaulana@gmail.com"
                className="group relative inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                <Send className="h-4 w-4" />
                Kirim Email
              </a>
            </div>

            {/* Right — contact list */}
            <div className="divide-y divide-border">
              {contactInfoData.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-6 transition-colors hover:bg-secondary/40"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/40">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="truncate font-medium text-foreground">{item.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
