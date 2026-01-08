"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative py-20 lg:py-28 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#E10600]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E10600] font-semibold text-sm uppercase tracking-wider mb-4">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Apa Kata <span className="text-[#E10600]">Mereka</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ratusan pelanggan puas telah mempercayakan perjalanan mereka kepada
            kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-[#E10600]/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#E10600] rounded-full flex items-center justify-center shadow-lg shadow-[#E10600]/30">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E10600] fill-[#E10600]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#0B0B0B]/70 text-sm leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E10600]/20"
                />
                <div>
                  <div className="font-semibold text-[#0B0B0B]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#0B0B0B]/50">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E10600] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: "500+", label: "Pelanggan Puas" },
            { value: "4.9", label: "Rating Rata-rata" },
            { value: "50+", label: "Unit Armada" },
            { value: "5+", label: "Tahun Pengalaman" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#0B0B0B] border border-white/10 rounded-2xl p-6 text-center hover:border-[#E10600]/50 transition-colors duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#E10600] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
