import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/assets/others/Logo-2.png"
import {
  Menu,
  X,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { whatsappHref } from "@/lib/site"
import { Button } from "../ui/button"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "services", "portfolio", "testimonials", "contact"]
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
    <nav className="sticky top-0 w-full bg-white/70 backdrop-blur-sm border-b border-gray-200 z-50" aria-label="Navigation">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
            <span className="text-xl font-medium text-black">Rangkai <span className="text-orange-500">Web</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {["home", "about-us", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors cursor-pointer py-1 px-3 ${
                  activeSection === item ? "text-orange-600 font-medium bg-orange-100 rounded-full" : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item === "home"
                  ? "Beranda"
                  : item === "about-us"
                    ? "Tentang Kami"
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
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex">
            <Button className="bg-rangkai-primary hover:bg-rangkai-primary/90 text-white animate-bounce" onClick={() => window.open(whatsappHref(), "_blank")}>
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {["home", "about-us", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50 capitalize cursor-pointer"
              >
                {item === "home"
                  ? "Beranda"
                  : item === "about-us"
                    ? "Tentang Kami"
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