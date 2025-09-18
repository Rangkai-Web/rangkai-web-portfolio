import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import Draw2 from "@/assets/draw2.png"

const Home = () => {
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
    <section id="home" className="pt-20 pb-16 px-4" aria-label="Beranda">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                🚀 Jasa Pembuatan Website Profesional
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Wujudkan Website
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Impian Anda
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dari landing page sederhana hingga toko online lengkap. Kami membantu bisnis Anda tampil profesional
                di dunia digital dengan harga terjangkau.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
                onClick={() => scrollToSection("services")}
              >
                Lihat Paket Layanan
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/62882005225421", "_blank")}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Konsultasi Gratis
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Website Dibuat</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3-10</div>
                <div className="text-sm text-gray-600">Hari Pengerjaan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Kepuasan Klien</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 float-end">
              <Image
                src={Draw2}
                alt="Website Development"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home