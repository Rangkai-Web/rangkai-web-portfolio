"use client";

import { 
  Monitor, 
  Share2, 
  MapPin, 
  User, 
  Wallet, 
  Clock, 
  Images, 
  Music, 
  Video, 
  MessageSquareHeart, 
  Heart, 
  ShieldCheck, 
} from "lucide-react";
import { Badge } from "../ui/badge"

const features = [
  {
    icon: Monitor,
    title: "Design Modern dan Responsif",
    description: "Say good bye untuk design jadul, biar undanganmu makin wow.",
    variant: "light"
  },
  {
    icon: Share2,
    title: "Share App",
    description: "Kamu bisa share undanganmu ke media sosial dengan mudah.",
    variant: "dark"
  },
  {
    icon: User,
    title: "Nama Tamu",
    description: "Menampilkan nama tamu yang diundang agar terasa lebih dekat.",
    variant: "light"
  },
  {
    icon: Wallet,
    title: "Amplop Digital",
    description: "Tamu dapat memberikan amplop langsung secara digital.",
    variant: "light"
  },
  {
    icon: MapPin,
    title: "Penunjuk Lokasi",
    description: "Dapat menunjukkan dan mengarahkan tamu ke lokasi acara.",
    variant: "dark"
  },
  {
    icon: Clock,
    title: "Hitungan Mundur",
    description: "Hitung mundur tanggal acara pernikahan.",
    variant: "light"
  },
  {
    icon: Images,
    title: "Galeri Foto",
    description: "Tampilkan momen-momen indah dalam galeri foto yang elegan.",
    variant: "dark"
  },
  {
    icon: Music,
    title: "Background Musik",
    description: "Tambahkan musik latar untuk suasana yang lebih romantis.",
    variant: "light"
  },
  {
    icon: Video,
    title: "Live Streaming",
    description: "Siarkan acara secara langsung untuk tamu yang tidak bisa hadir.",
    variant: "dark"
  },
  {
    icon: MessageSquareHeart,
    title: "Doa & Ucapan",
    description: "Terima doa dan ucapan dari para tamu undangan.",
    variant: "light"
  },
  {
    icon: Heart,
    title: "Love Stories",
    description: "Ceritakan kisah cinta kalian yang romantis dan menyentuh hati.",
    variant: "dark"
  },
  {
    icon: ShieldCheck,
    title: "Protokol Kesehatan",
    description: "Informasikan protokol kesehatan untuk keamanan bersama.",
    variant: "light"
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-white dark:from-gray-900 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-100/20 dark:from-orange-500/10 dark:to-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-amber-200/30 to-orange-100/20 dark:from-amber-500/10 dark:to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">
            Fitur Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Fitur Yang Keren Dan Lengkap
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Berikut berbagai fitur yang akan anda dapatkan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isDark = feature.variant === "dark";
            
            return (
              <div
                key={index}
                className={`
                  group relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1
                  ${isDark 
                    ? "bg-gradient-to-br from-orange-600 to-amber-600 dark:from-orange-700 dark:to-amber-700 text-white shadow-xl shadow-orange-500/20 dark:shadow-orange-900/30" 
                    : "bg-white dark:bg-gray-800/80 border border-orange-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:shadow-orange-100/50 dark:hover:shadow-orange-900/20"
                  }
                `}
              >
                {/* Decorative gradient overlay for dark cards */}
                {isDark && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                
                {/* Icon */}
                <div 
                  className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    ${isDark 
                      ? "bg-white/20 backdrop-blur-sm" 
                      : "bg-gradient-to-br from-orange-100 to-amber-50 dark:from-orange-900/40 dark:to-amber-900/30"
                    }
                  `}
                >
                  <IconComponent 
                    className={`w-7 h-7 md:w-8 md:h-8 ${isDark ? "text-white" : "text-orange-600 dark:text-orange-400"}`} 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 
                  className={`
                    text-lg md:text-xl font-bold mb-2
                    ${isDark ? "text-white" : "text-gray-900 dark:text-white"}
                  `}
                >
                  {feature.title}
                </h3>
                <p 
                  className={`
                    text-sm md:text-base leading-relaxed
                    ${isDark ? "text-orange-100/90" : "text-gray-600 dark:text-gray-400"}
                  `}
                >
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-1/3
                    ${isDark ? "bg-white/70" : "bg-gradient-to-r from-orange-500 to-amber-500"}
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
