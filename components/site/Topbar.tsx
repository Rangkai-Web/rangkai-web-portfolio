import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { CONTACT } from "@/lib/site"
import { Instagram, Mail, Moon, Sun, } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { Button } from "../ui/button"

export function Topbar({ instagram, tiktok }: { instagram: string, tiktok: string }) {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
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

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800" aria-label="Topbar">
      <div className="mx-auto px-6 py-2 text-sm flex items-center justify-between">
        <p className="text-balance flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${CONTACT.email}`} target="_blank">{CONTACT.email}</a>
        </p>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 w-4! h-4!"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          )}
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link
            href={instagram}
            aria-label="Instagram Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            target="_blank"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link
            href={tiktok}
            aria-label="Tiktok Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            target="_blank"
          >
            <FaTiktok className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
