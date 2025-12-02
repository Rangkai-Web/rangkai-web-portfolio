import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/assets/others/Logo-2.png"
import LogoWhite from "@/assets/others/logo-white.png"
import {
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { whatsappHref } from "@/lib/site"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const Navigation = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState<string>("light")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !theme) return
    
    const html = document.documentElement
    let activeTheme = theme
    
    // If theme is 'system', detect system preference
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      activeTheme = systemPrefersDark ? 'dark' : 'light'
    }
    
    setResolvedTheme(activeTheme)
    html.classList.remove("light", "dark")
    html.classList.add(activeTheme)
  }, [theme, mounted])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const html = document.documentElement
      const activeTheme = e.matches ? 'dark' : 'light'
      setResolvedTheme(activeTheme)
      html.classList.remove("light", "dark")
      html.classList.add(activeTheme)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mounted, theme])

  const toggleTheme = () => {
    // Read current state directly from DOM to avoid stale state
    if (typeof window === "undefined") return
    
    const html = document.documentElement
    const isCurrentlyDark = html.classList.contains("dark")
    const newResolvedTheme = isCurrentlyDark ? "light" : "dark"
    const newTheme = newResolvedTheme // Store as explicit theme, not system
    
    // Update immediately
    html.classList.remove("light", "dark")
    html.classList.add(newResolvedTheme)
    
    // Update state
    setResolvedTheme(newResolvedTheme)
    setTheme(newTheme)
  }

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
    <nav className="sticky top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50" aria-label="Navigation">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {mounted ? (
              <Image src={(theme || "light") === "dark" ? LogoWhite : Logo} alt="Rangkai Web" width={96} height={96} className="" />
            ) : (
              <Image src={Logo} alt="Rangkai Web" width={96} height={96} className="" />
            )}
            {/* <span className="text-xl font-medium text-black">Rangkai <span className="text-orange-500">Web</span></span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {["home", "about-us"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors cursor-pointer py-1 px-3 ${
                  activeSection === item 
                    ? "text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 rounded-full" 
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
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
                      ? "text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 rounded-full"
                      : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                  }`}
                >
                  Layanan
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 border-0 dark:border-gray-700 shadow-2xl">
                <DropdownMenuItem
                  onClick={() => {
                    scrollToSection("services")
                    setIsServicesDropdownOpen(false)
                  }}
                  className="cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white rounded-md"
                >
                  Website Development
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    scrollToSection("digital-invitation")
                    setIsServicesDropdownOpen(false)
                  }}
                  className="cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white rounded-md"
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
                  activeSection === item 
                    ? "text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 rounded-full" 
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
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
          <button className="lg:hidden text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                aria-label="Toggle dark mode"
              >
                {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}
            <Button className="bg-rangkai-primary hover:bg-rangkai-primary/90 text-white animate-bounce" onClick={() => window.open(whatsappHref(), "_blank")}>
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {["home", "about-us"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 capitalize cursor-pointer transition-colors"
              >
                {item === "home"
                  ? "Beranda"
                  : "Tentang Kami"}
              </button>
            ))}
            
            <div className="border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 cursor-pointer transition-colors"
              >
                <span className="font-medium">Layanan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="bg-orange-50/50 dark:bg-orange-900/10">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left py-2 px-8 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 cursor-pointer transition-colors"
                  >
                    Website Development
                  </button>
                  <button
                    onClick={() => scrollToSection("digital-invitation")}
                    className="block w-full text-left py-2 px-8 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 cursor-pointer transition-colors"
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
                className="block w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 capitalize cursor-pointer transition-colors"
              >
                {item === "portfolio"
                  ? "Portofolio"
                  : item === "testimonials"
                    ? "Testimoni"
                    : "Kontak"}
              </button>
            ))}

            {mounted && (
              <div className="border-t border-gray-200 dark:border-gray-800 pt-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 cursor-pointer transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {resolvedTheme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Darkmode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Lightmode</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation