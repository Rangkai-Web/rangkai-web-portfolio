"use client";

import { Car, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { bookingSteps } from "./data";

const stepIcons = [Car, Calendar, MessageCircle, CheckCircle];

export function HowToBook() {
  return (
    <section
      id="harga"
      className="relative py-20 lg:py-28 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E10600]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#E10600 1px, transparent 1px), linear-gradient(90deg, #E10600 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E10600] font-semibold text-sm uppercase tracking-wider mb-4">
            Cara Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mudah & <span className="text-[#E10600]">Cepat</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Hanya butuh 4 langkah mudah untuk menikmati perjalanan bersama kami
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#E10600]/20 via-[#E10600] to-[#E10600]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {bookingSteps.map((step, index) => {
              const IconComponent = stepIcons[index];

              return (
                <div
                  key={step.id}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Step Card */}
                  <div className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 text-center hover:border-[#E10600]/50 transition-all duration-500 hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E10600] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#E10600]/30">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-[#E10600]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E10600]/20 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-[#E10600]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  </div>

                  {/* Arrow - Mobile/Tablet */}
                  {index < bookingSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 border-2 border-[#E10600]/30 rounded-full flex items-center justify-center rotate-90">
                        <span className="text-[#E10600] text-lg">↓</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-6">
            Siap untuk memulai perjalanan?
          </p>
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#kontak")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 bg-[#E10600] hover:bg-[#ff1a14] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#E10600]/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
