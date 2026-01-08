"use client";

import {
  Car,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import { contactInfo, navLinks } from "./data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil`;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="kontak" className="relative bg-[#0B0B0B] overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E10600] to-transparent" />

      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E10600]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 bg-[#E10600] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Rental<span className="text-[#E10600]">Mobil</span>
              </span>
            </a>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Layanan rental mobil terpercaya dengan armada berkualitas dan
              harga transparan. Siap melayani kebutuhan transportasi Anda 24 jam
              sehari.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#E10600] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#E10600] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#E10600] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Menu Cepat
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {[
                "Sewa Harian",
                "Sewa Mingguan",
                "Sewa Bulanan",
                "Dengan Driver",
                "Lepas Kunci",
                "Antar Jemput Bandara",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E10600] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E10600] flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E10600] flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E10600] hover:bg-[#ff1a14] text-white px-6 py-3 rounded-lg font-semibold text-sm mt-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/30"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} RentalMobil. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/50 hover:text-[#E10600] transition-colors duration-300"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#E10600] transition-colors duration-300"
              >
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
