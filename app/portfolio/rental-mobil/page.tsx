import { Metadata } from "next";
import {
  Navbar,
  Hero,
  WhyChooseUs,
  Fleet,
  HowToBook,
  Services,
  Testimonials,
  CTA,
  Footer,
} from "@/components/rental-mobil";

export const metadata: Metadata = {
  title: "Rental Mobil - Sewa Mobil Nyaman & Terpercaya",
  description:
    "Layanan rental mobil terpercaya dengan armada berkualitas dan harga transparan. Pilihan mobil lengkap, driver profesional, siap jalan kapan saja.",
  keywords: [
    "rental mobil",
    "sewa mobil",
    "rental mobil murah",
    "sewa mobil harian",
    "rental mobil dengan driver",
    "sewa mobil lepas kunci",
  ],
  openGraph: {
    title: "Rental Mobil - Sewa Mobil Nyaman & Terpercaya",
    description:
      "Layanan rental mobil terpercaya dengan armada berkualitas dan harga transparan.",
    type: "website",
  },
};

export default function RentalMobilPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Fleet / Armada */}
      <Fleet />

      {/* How to Book / Cara Booking */}
      <HowToBook />

      {/* Additional Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}