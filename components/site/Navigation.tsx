import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/assets/others/Logo-2.png"
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { whatsappHref } from "@/lib/site"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "services", "digital-invitation", "portfolio", "testimonials", "contact"]
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
    setIsMobileServicesOpen(false)
  }

  return (
    <nav className="sticky top-0 w-full bg-white/70 backdrop-blur-sm border-b border-gray-200 z-50" aria-label="Navigation">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Rangkai Web" width={96} height={96} className="" />
            {/* <span className="text-xl font-medium text-black">Rangkai <span className="text-orange-500">Web</span></span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {["home", "about-us"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors cursor-pointer py-1 px-3 ${
                  activeSection === item ? "text-orange-600 font-medium bg-orange-100 rounded-full" : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item === "home"
                  ? "Beranda"
                  : "Tentang Kami"}
              </button>
            ))}
            
            <DropdownMenu open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className={`capitalize transition-colors cursor-pointer py-1 px-3 flex items-center gap-1 outline-none ${
                    activeSection === "services" || activeSection === "digital-invitation"
                      ? "text-orange-600 font-medium bg-orange-100 rounded-full"
                      : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  Layanan
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-gradient-to-br from-orange-50 to-white border-0 shadow-2xl">
                <DropdownMenuItem
                  onClick={() => {
                    scrollToSection("services")
                    setIsServicesDropdownOpen(false)
                  }}
                  className="cursor-pointer hover:bg-orange-500 hover:text-white rounded-md"
                >
                  Website Development
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    scrollToSection("digital-invitation")
                    setIsServicesDropdownOpen(false)
                  }}
                  className="cursor-pointer hover:bg-orange-500 hover:text-white rounded-md"
                >
                  Undangan Digital
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {["portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors cursor-pointer py-1 px-3 ${
                  activeSection === item ? "text-orange-600 font-medium bg-orange-100 rounded-full" : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item === "portfolio"
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
            {["home", "about-us"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50 capitalize cursor-pointer"
              >
                {item === "home"
                  ? "Beranda"
                  : "Tentang Kami"}
              </button>
            ))}
            
            <div className="border-t border-gray-200">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50 cursor-pointer"
              >
                <span className="font-medium">Layanan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="bg-orange-50/50">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left py-2 px-8 text-gray-600 hover:text-orange-600 hover:bg-orange-100 cursor-pointer transition-colors"
                  >
                    Website Development
                  </button>
                  <button
                    onClick={() => scrollToSection("digital-invitation")}
                    className="block w-full text-left py-2 px-8 text-gray-600 hover:text-orange-600 hover:bg-orange-100 cursor-pointer transition-colors"
                  >
                    Undangan Digital
                  </button>
                </div>
              )}
            </div>

            {["portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50 capitalize cursor-pointer"
              >
                {item === "portfolio"
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