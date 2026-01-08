"use client";

import { ChevronRight, Play } from "lucide-react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop&auto=format')",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E10600]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#E10600]/5 rounded-full blur-2xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#E10600 1px, transparent 1px), linear-gradient(90deg, #E10600 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#E10600] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm">
                #1 Rental Mobil Terpercaya
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Sewa Mobil{" "}
              <span className="text-[#E10600] relative">
                Nyaman
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="#E10600"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <br />& Terpercaya
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0">
              Pilihan mobil lengkap, harga transparan, siap jalan kapan saja.
              Nikmati perjalanan Anda bersama kami.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("#kontak")}
                className="group bg-[#E10600] hover:bg-[#ff1a14] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#E10600]/30 hover:scale-105 flex items-center justify-center gap-2"
              >
                Booking Sekarang
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("#armada")}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-white/40 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Lihat Armada
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  500<span className="text-[#E10600]">+</span>
                </div>
                <div className="text-white/50 text-sm mt-1">
                  Pelanggan Puas
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  50<span className="text-[#E10600]">+</span>
                </div>
                <div className="text-white/50 text-sm mt-1">Unit Armada</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  5<span className="text-[#E10600]">★</span>
                </div>
                <div className="text-white/50 text-sm mt-1">Rating Google</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Car Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&auto=format"
                  alt="Luxury Car"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#E10600] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">24</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Jam</div>
                      <div className="text-white/60 text-sm">Layanan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-8 -right-8 w-72 h-72 border-2 border-[#E10600]/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[#E10600]/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
