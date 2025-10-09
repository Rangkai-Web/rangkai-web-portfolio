import Image from "next/image"
import Logo from "@/assets/others/Logo-2.png"
import { Instagram, Mail, } from "lucide-react"
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#111] text-white py-12 px-4" aria-label="Footer">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
              <span className="text-xl font-bold text-white">Rangkai <span className="text-orange-500">Web</span></span>
            </div>
            <p className="text-gray-400">
              Jasa pembuatan website profesional dengan harga terjangkau untuk semua jenis bisnis.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Landing Page</li>
              <li>Company Profile</li>
              <li>Online Shop</li>
              <li>Website Custom</li>
              <li>Website Custom + Integrasi AI</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-orange-500" onClick={() => scrollToSection("home")}>Beranda</a></li>
              <li><a href="#about-us" className="hover:text-orange-500" onClick={() => scrollToSection("about-us")}>Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-orange-500" onClick={() => scrollToSection("services")}>Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500" onClick={() => scrollToSection("portfolio")}>Portofolio</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500" onClick={() => scrollToSection("testimonials")}>Testimoni</a></li>
              <li><a href="#contact" className="hover:text-orange-500" onClick={() => scrollToSection("contact")}>Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2 hover:text-orange-500"><Mail className="w-4 h-4" /> <a href="mailto:info@rangkaiweb.com" target="_blank">info@rangkaiweb.com</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500"><FaWhatsapp className="w-4 h-4" /> <a href="https://wa.me/62882005225421" target="_blank">+62882005225421</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500"><Instagram className="w-4 h-4" /> <a href="https://instagram.com/rangkaiweb" target="_blank">@rangkaiweb</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500"><FaTiktok className="w-4 h-4" /> <a href="https://tiktok.com/@rangkaiweb" target="_blank">@rangkaiweb</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rangkai Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer