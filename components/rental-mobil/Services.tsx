"use client";

import { UserCheck, Key, Plane, Calendar } from "lucide-react";
import { services } from "./data";

const iconMap = {
  "user-check": UserCheck,
  key: Key,
  plane: Plane,
  calendar: Calendar,
};

export function Services() {
  return (
    <section
      id="layanan"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(#E10600 2px, transparent 2px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E10600] font-semibold text-sm uppercase tracking-wider mb-4">
            Layanan Tambahan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6">
            Lebih dari Sekadar <span className="text-[#E10600]">Rental</span>
          </h2>
          <p className="text-[#0B0B0B]/60 text-lg max-w-2xl mx-auto">
            Nikmati berbagai layanan tambahan untuk pengalaman perjalanan yang
            lebih nyaman
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || UserCheck;

            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-white to-[#f8f8f8] border-2 border-[#0B0B0B]/10 rounded-2xl p-8 text-center hover:border-[#E10600] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E10600]/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#E10600] to-[#ff3333] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#E10600]/20 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#0B0B0B]/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E10600] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 bg-gradient-to-r from-[#0B0B0B] to-[#1A1A1A] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Butuh <span className="text-[#E10600]">Layanan Khusus</span>?
              </h3>
              <p className="text-white/60 text-lg">
                Hubungi kami untuk kebutuhan rental mobil custom sesuai acara
                atau perjalanan bisnis Anda. Tim kami siap membantu 24/7.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#kontak")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#E10600] hover:bg-[#ff1a14] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#E10600]/30 hover:scale-105"
              >
                Hubungi Kami
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
