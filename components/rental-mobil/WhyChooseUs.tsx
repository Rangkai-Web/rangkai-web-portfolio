"use client";

import { Car, BadgeCheck, User, Clock } from "lucide-react";
import { features } from "./data";

const iconMap = {
  car: Car,
  "badge-check": BadgeCheck,
  user: User,
  clock: Clock,
};

export function WhyChooseUs() {
  return (
    <section
      id="keunggulan"
      className="relative py-20 lg:py-28 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E10600] font-semibold text-sm uppercase tracking-wider mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Keunggulan{" "}
            <span className="text-[#E10600]">Layanan Kami</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman sewa mobil terbaik untuk
            setiap pelanggan
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Car;

            return (
              <div
                key={feature.id}
                className="group relative bg-[#0B0B0B] border border-white/10 rounded-2xl p-8 hover:border-[#E10600]/50 transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#E10600]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E10600]/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#E10600]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-[#E10600]/10 transition-colors duration-300">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-4">
            Tertarik dengan layanan kami?
          </p>
          <a
            href="#armada"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#armada")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#E10600] font-semibold hover:gap-4 transition-all duration-300"
          >
            Lihat Armada Kami
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
