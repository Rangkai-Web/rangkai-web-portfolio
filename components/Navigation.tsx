import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/assets/Logo-2.png"
import {
  Menu,
  X,
} from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
            <span className="text-xl font-bold text-black">Rangkai <span className="text-orange-500">Web</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item === "home"
                  ? "Beranda"
                  : item === "services"
                    ? "Layanan"
                    : item === "portfolio"
                      ? "Portofolio"
                      : item === "testimonials"
                        ? "Testimoni"
                        : "Kontak"}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {["home", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 capitalize"
              >
                {item === "home"
                  ? "Beranda"
                  : item === "services"
                    ? "Layanan"
                    : item === "portfolio"
                      ? "Portofolio"
                      : item === "testimonials"
                        ? "Testimoni"
                        : "Kontak"}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation