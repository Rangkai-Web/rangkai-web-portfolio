import Image from "next/image"
import Logo from "@/assets/others/logo-white.webp"
import { Instagram, Mail, } from "lucide-react"
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/language-provider"

const Footer = () => {
  const { t } = useLanguage()
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#111] dark:bg-gray-950 text-white py-12" aria-label="Footer">
      <div className="container mx-auto max-w-7xl px-8 md:px-24">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center space-x-2">
              <Image src={Logo} alt="Rangkai Web" width={96} height={96} className="" />
              {/* <span className="text-xl font-medium text-white">Rangkai <span className="text-orange-500">Web</span></span> */}
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 dark:text-gray-200 mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Landing Page</li>
              <li>Company Profile</li>
              <li>Online Shop</li>
              <li>Website Custom</li>
              <li>Website Custom + Integrasi AI</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 dark:text-gray-200 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="#home" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("home")}>{t('nav.home')}</a></li>
              <li><a href="#about-us" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("about-us")}>{t('nav.aboutUs')}</a></li>
              <li><a href="#services" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("services")}>{t('nav.services')}</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("portfolio")}>{t('nav.portfolio')}</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("testimonials")}>{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors" onClick={() => scrollToSection("contact")}>{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-100 dark:text-gray-200 mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><Mail className="w-4 h-4" /> <a href="mailto:info@rangkaiweb.com" target="_blank">info@rangkaiweb.com</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><FaWhatsapp className="w-4 h-4" /> <a href="https://wa.me/62882005225421" target="_blank">+62882005225421</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><Instagram className="w-4 h-4" /> <a href="https://instagram.com/rangkaiweb" target="_blank">@rangkaiweb</a></li>
              <li className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><FaTiktok className="w-4 h-4" /> <a href="https://tiktok.com/@rangkaiweb" target="_blank">@rangkaiweb</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rangkai Web. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer