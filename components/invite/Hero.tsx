"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, } from "lucide-react";
import Image from "next/image";
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/others/Logo-2.webp"
import LogoWhite from "@/assets/others/logo-white.webp"
import { useTheme } from "next-themes"

export function HeroSection() {
  const [activeSection, setActiveSection] = useState("")
  const { theme } = useTheme()
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tema-undangan", "fitur"]
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
  }

  return (
    <section
      id="home"
      className="relative min-h-[80dvh] md:min-h-[60dvh] overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 dark:from-gray-900 dark:via-orange-950/40 dark:to-gray-900 rounded-b-[2.5rem]"
      aria-label="Hero Section"
    >
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-300/40 to-amber-200/30 dark:from-orange-500/20 dark:to-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-200/50 to-yellow-200/40 dark:from-orange-600/15 dark:to-amber-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-amber-300/30 to-orange-200/20 dark:from-orange-500/10 dark:to-amber-500/5 rounded-full blur-2xl" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f97316\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="absolute inset-0 container mx-auto max-w-7xl p-8 lg:px-24 xl:px-28 flex">
        <div className="flex flex-col justify-center items-start gap-5 pt-[env(safe-area-inset-top,3rem)] md:pt-0 relative z-10">
          <div className="flex items-center space-x-2">
            {mounted ? (
              <Image src={resolvedTheme === "dark" ? LogoWhite : Logo} alt="Rangkai Web" width={96} height={96} className="h-8 w-auto" />
            ) : (
              <Image src={Logo} alt="Rangkai Web" width={96} height={96} className="h-8 w-auto" />
            )}
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-orange-300 dark:to-amber-400 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Jasa Undangan Digital
            </span>
          </h1>
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            Kami menawarkan Jasa Undangan Digital untuk Pernikahan atau pun acara lainnya. Dengan pengalaman kami yang sudah bertahun-tahun, kami siap membuat undangan digital yang bukan cuma cantik, tapi juga fungsional.
          </p>
          <div className="flex flex-row gap-4 relative z-20 mt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] px-6"
              onClick={() => scrollToSection("tema-undangan")}
            >
              Lihat Tema
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 dark:border-orange-500 text-orange-600 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50 font-semibold transition-all duration-300"
              onClick={() => scrollToSection("fitur")}
            >
              Lihat Fitur
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent rounded-b-[2.5rem]" />
    </section>
  );
}