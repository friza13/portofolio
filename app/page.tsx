import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
