"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Mail,
  Instagram,
  Users,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Logo from "@/public/Logo-2.png"
import Draw2 from "@/public/Draw2.png"
import GayaKitaStore from "@/public/GayaKitaStore.png"
import SmartClean from "@/public/SmartClean.png"
import SMKDigitalNusantara from "@/public/SMKDigitalNusantara.png"

export default function RangkaiWebPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waNumber = "6285727346620"
    const text =
      `Halo, saya ingin konsultasi website.\n` +
      `Nama: ${contactForm.name}\n` +
      `Email: ${contactForm.email}\n` +
      `Subjek: ${contactForm.subject}\n` +
      `Pesan: ${contactForm.message}`
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
    window.open(waUrl, "_blank")
  }

  const packages = [
    {
      name: "Starter",
      price: "Rp399.000",
      description: "Cocok untuk kamu yang ingin mulai tampil online secara hemat namun tetap profesional",
      features: [
        "1 Halaman (Landing Page sederhana)",
        "Desain mobile-friendly",
        "Konten dasar (tentang, produk/jasa, kontak)",
        "Integrasi WhatsApp",
        // "Gratis domain .my.id (1 tahun)",
        // "Hosting 500MB (1 tahun)",
        "Estimasi jadi: 3-5 hari kerja",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Bisnis",
      price: "Rp899.000",
      description: "Direkomendasikan untuk UMKM dan bisnis skala kecil-menengah yang ingin tampil lebih kredibel",
      features: [
        "3-5 Halaman (Home, Produk/Jasa, Tentang Kami, Kontak, dsb.)",
        "Desain custom & mobile responsive",
        "Galeri foto atau katalog produk",
        "Integrasi WhatsApp & Maps",
        // "Gratis domain .com (1 tahun)",
        // "Hosting 1GB (1 tahun)",
        "SEO dasar (judul, deskripsi, struktur heading)",
        "Estimasi jadi: 5-7 hari kerja",
      ],
      popular: true,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Profesional",
      price: "Rp1.499.000",
      description: "Paket lengkap untuk bisnis yang ingin tampil profesional & optimal di pencarian Google",
      features: [
        "5+ Halaman (Home, Layanan, Portofolio, Artikel, Kontak, dsb.)",
        "Desain premium & fast loading",
        "CMS admin panel (ubah konten sendiri)",
        "SEO on-page + struktur blog",
        "Integrasi WhatsApp, Google Maps, Google Analytics",
        "Formulir kontak / permintaan penawaran",
        // "Gratis domain .com (1 tahun)",
        // "Hosting 2GB (1 tahun)",
        "Estimasi jadi: 7-10 hari kerja",
      ],
      popular: false,
      color: "from-emerald-500 to-emerald-600",
    },
  ]

  const portfolioItems = [
    {
      name: "SmartClean",
      type: "Landing Page - Promo Produk",
      description:
        "Landing Page produk cairan pembersih ramah lingkungan dengan fokus konversi (CTA beli sekarang, testimoni, dan highlight keunggulan produk).",
      image: SmartClean,
      tags: ["Landing Page", "E-commerce", "Conversion"],
    },
    {
      name: "GayaKita Store",
      type: "E-Commerce - Toko Online Fashion",
      description:
        "Website toko online baju lokal, fitur katalog, keranjang, checkout, dan notifikasi pesanan via WhatsApp.",
      image: GayaKitaStore,
      tags: ["E-commerce", "Fashion", "Online Store"],
    },
    {
      name: "SMK Digital Nusantara",
      type: "CMS - Portal Informasi Sekolah",
      description:
        "Website sekolah dengan halaman berita, pengumuman, galeri kegiatan, dan sistem upload artikel dari admin panel.",
      image: SMKDigitalNusantara,
      tags: ["CMS", "Education", "Portal"],
    },
  ]

  const testimonials = [
    {
      name: "Mbak Sinta",
      role: "Pemilik SmartClean",
      content:
        "Awalnya saya ragu bikin website, tapi ternyata Rangkai Web bantu semua dari nol. Sekarang landing page saya bikin jualan makin mudah!",
      rating: 5,
    },
    {
      name: "Mas Dika",
      role: "Owner GayaKita Store",
      content:
        "Website tokonya keren banget, kelihatan profesional dan gampang dikelola. Order masuk tiap hari, alhamdulillah!",
      rating: 5,
    },
    {
      name: "Bu Yuni",
      role: "Kepala Sekolah SMK Digital",
      content:
        "Tim Rangkai Web sangat responsif dan sabar. Website sekolah kami sekarang aktif dan bisa update sendiri kontennya.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
              <span className="text-xl font-bold text-black">Rangkai <span className="text-orange-500">Web</span></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "services", "portfolio", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item === "home"
                    ? "Beranda"
                    : item === "services"
                      ? "Layanan"
                      : item === "portfolio"
                        ? "Portofolio"
                        : item === "testimonials"
                          ? "Testimoni"
                          : "Kontak"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["home", "services", "portfolio", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 capitalize"
                >
                  {item === "home"
                    ? "Beranda"
                    : item === "services"
                      ? "Layanan"
                      : item === "portfolio"
                        ? "Portofolio"
                        : item === "testimonials"
                          ? "Testimoni"
                          : "Kontak"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  🚀 Jasa Pembuatan Website Profesional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan Website
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {" "}
                    Impian Anda
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dari landing page sederhana hingga toko online lengkap. Kami membantu bisnis Anda tampil profesional
                  di dunia digital dengan harga terjangkau.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
                  onClick={() => scrollToSection("services")}
                >
                  Lihat Paket Layanan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/6285727346620", "_blank")}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Website Dibuat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3-10</div>
                  <div className="text-sm text-gray-600">Hari Pengerjaan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={Draw2}
                  alt="Website Development"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">💼 Paket Layanan</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilih Paket yang Sesuai dengan Kebutuhan Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari UMKM hingga enterprise, kami memiliki solusi website yang tepat untuk setiap skala bisnis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm font-medium">
                    Terpopuler
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-4`}
                  >
                    {index === 0 && <Zap className="w-6 h-6 text-white" />}
                    {index === 1 && <Award className="w-6 h-6 text-white" />}
                    {index === 2 && <Users className="w-6 h-6 text-white" />}
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 bg-gradient-to-r ${pkg.color} hover:opacity-90`}
                    onClick={() => {
                      const waNumber = "6285727346620"
                      const text =
                        `Halo, saya tertarik dengan paket website berikut:\n` +
                        `Paket: ${pkg.name}\n` +
                        `Harga: ${pkg.price}\n` +
                        `Deskripsi: ${pkg.description}`
                      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
                      window.open(waUrl, "_blank")
                    }}
                  >
                    Pilih Paket Ini
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">🎨 Portofolio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Karya Terbaik Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat beberapa project website yang telah kami kerjakan untuk berbagai jenis bisnis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-72 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-white/20 text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {item.type}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">⭐ Testimoni</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah mempercayai
              layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white hover:bg-white/20 mb-4">📞 Hubungi Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Siap Memulai Project Anda?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Konsultasi gratis untuk menentukan solusi website terbaik untuk bisnis Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-blue-100">rangkaiweb@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-blue-100">+62 857 2734 6620</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-blue-100">@rangkaiweb</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://wa.me/6285727346620", "_blank")}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  onClick={() => window.open("https://instagram.com/rangkaiweb", "_blank")}
                >
                  <Instagram className="mr-2 w-4 h-4" />
                  Follow Instagram
                </Button>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Kirim Pesan</CardTitle>
                <CardDescription className="text-blue-100">
                  Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleContactSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Nama Anda"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      value={contactForm.name}
                      onChange={handleContactChange}
                    />
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      value={contactForm.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subjek"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Ceritakan kebutuhan website Anda..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    value={contactForm.message}
                    onChange={handleContactChange}
                  />
                  <Button type="submit" className="w-full bg-white text-blue-900 hover:bg-blue-50">Kirim Pesan</Button>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">Rangkai <span className="text-orange-500">Web</span></span>
                <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
              </div>
              <p className="text-gray-400">
                Jasa pembuatan website profesional dengan harga terjangkau untuk semua jenis bisnis.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Landing Page</li>
                <li>Website Bisnis</li>
                <li>Toko Online</li>
                <li>Website Sekolah</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Portofolio</li>
                <li>Testimoni</li>
                <li>Kontak</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>rangkaiweb@gmail.com</li>
                <li>+62 857 2734 6620</li>
                <li>@rangkaiweb</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rangkai Web. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
