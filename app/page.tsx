"use client"

import Navigation from "@/components/Navigation"
import Home from "@/components/Home"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Testimoni from "@/components/Testimoni"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function RangkaiWebPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main>
        <Home />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials Section */}
        <Testimoni />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
