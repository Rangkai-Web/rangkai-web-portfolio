"use client";

import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { navLinks } from "./data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0B0B0B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#E10600] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Rental<span className="text-[#E10600]">Mobil</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E10600] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#kontak");
              }}
              className="bg-[#E10600] hover:bg-[#c10500] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/30 hover:scale-105"
            >
              Booking Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B0B0B] border-t border-white/10 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#kontak");
            }}
            className="block bg-[#E10600] hover:bg-[#c10500] text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors mt-4"
          >
            Booking Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
