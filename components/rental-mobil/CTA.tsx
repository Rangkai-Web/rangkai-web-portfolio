"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { contactInfo } from "./data";

export function CTA() {
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil`;

  return (
    <section className="relative py-20 lg:py-28 bg-[#E10600] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B0B0B]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Diagonal Stripes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-[200%] bg-white/5 rotate-12" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-[200%] bg-white/5 rotate-12" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
          <MessageCircle className="w-10 h-10 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Siap Jalan <span className="text-[#0B0B0B]">Hari Ini?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
          Hubungi kami sekarang dan dapatkan mobil terbaik untuk perjalanan
          Anda. Proses cepat, harga terjangkau!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#0B0B0B] hover:bg-[#1A1A1A] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B0B0B]/50 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Chat WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:border-white/50"
          >
            <Phone className="w-6 h-6" />
            {contactInfo.phone}
          </a>
        </div>

        {/* Trust Text */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            Respon Cepat
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            Tanpa Biaya Tersembunyi
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            Pembayaran Fleksibel
          </div>
        </div>
      </div>
    </section>
  );
}
