"use client";

import { Users, Settings } from "lucide-react";
import { cars } from "./data";

export function Fleet() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const scrollToContact = () => {
    document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="armada" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#E10600 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E10600] font-semibold text-sm uppercase tracking-wider mb-4">
            Armada Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6">
            Pilihan <span className="text-[#E10600]">Mobil Lengkap</span>
          </h2>
          <p className="text-[#0B0B0B]/60 text-lg max-w-2xl mx-auto">
            Berbagai pilihan mobil berkualitas untuk memenuhi kebutuhan
            perjalanan Anda
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group relative bg-white border-2 border-[#0B0B0B]/10 rounded-2xl overflow-hidden hover:border-[#E10600] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E10600]/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#E10600] text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
                  {formatPrice(car.price)}/hari
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-3">
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center gap-4 text-[#0B0B0B]/60 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{car.capacity} Penumpang</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">{car.transmission}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#0B0B0B] hover:bg-[#E10600] text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg"
                >
                  Sewa Mobil
                </button>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E10600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#E10600] hover:bg-[#c10500] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#E10600]/30 hover:scale-105"
          >
            Lihat Semua Armada
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
