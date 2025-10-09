"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Hero1 from "@/assets/hero/hero1.jpg";
import Hero2 from "@/assets/hero/hero2.jpg";
import Hero3 from "@/assets/hero/hero3.jpg";

const heroImages = [
  {
    src: Hero1,
    alt: "Hero 1",
  },
  {
    src: Hero2,
    alt: "Hero 2",
  },
  {
    src: Hero3,
    alt: "Hero 3",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section
      id="home"
      className="relative h-[90dvh] md:h-[90dvh] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              width={800}
              height={800}
              alt={image.alt}
              priority={index === 0}
              className="w-full h-full object-cover"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-black/70 z-0" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
        type="button"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
        type="button"
        aria-label="Slide selanjutnya"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Content Overlay */}
      <div className="absolute inset-0 container mx-auto px-4 flex pb-16">
        <div className="flex flex-col justify-center items-start gap-4 text-white">
          <Badge className="w-fit text-orange-600 font-medium bg-orange-100 text-base">
            Solusi Tepat di Era Digital
          </Badge>
          <h1 className="text-4xl lg:text-6xl text-white leading-tight">
            Jasa Pembuatan Website <br/>
            <span className="bg-gradient-to-r from-orange-300 to-rangkai-primary bg-clip-text text-transparent">
              Profesional & Terpercaya
            </span>
          </h1>
          <p className="text-xl text-white leading-relaxed mb-4">
            Dapatkan solusi untuk membantu bisnis tampil modern dan kredibel melalui website yang cepat dan fungsional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-300 to-rangkai-primary hover:from-rangkai-primary hover:to-orange-300 relative z-20"
              onClick={() => scrollToSection("services")}
            >
              Lihat Paket Layanan
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-black relative z-20 border-0 hover:bg-white/80"
              onClick={() => window.open("https://wa.me/62882005225421", "_blank")}
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20" role="tablist" aria-label="Navigasi slide">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
}