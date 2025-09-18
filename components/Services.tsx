import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Users,
  Award,
  Zap,
  Settings,
} from "lucide-react"

const Services = () => {
  const packages = [
    {
      name: "Landing Page",
      price: "Mulai dari Rp1.000.000",
      description: "Paket hemat untuk personal atau bisnis.",
      features: [
        "1 Halaman (Landing Page)",
        "Desain Responsif",
        "Konten Dasar (Tentang, Produk/Jasa, Kontak)",
        "Integrasi WhatsApp",
        "Estimasi pengerjaan 3-5 Hari Kerja",
        "Free Konsultasi",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Company Profile",
      price: "Mulai dari Rp1.500.000",
      description: "Paling populer! Cocok untuk UMKM dan perusahaan.",
      features: [
        "3 Halaman",
        "Desain Custom & Responsif",
        "Galeri Foto / Katalog Produk",
        "Integrasi WhatsApp & Maps",
        "SEO Friendly",
        "Estimasi pengerjaan 5–7 Hari Kerja",
        "Free Konsultasi",
      ],
      popular: true,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Online Shop",
      price: "Mulai dari Rp2.500.000",
      description: "Paket lengkap untuk bisnis yang ingin tampil profesional.",
      features: [
        "3–5 Halaman",
        "Desain Custom & Responsif",
        "Admin Panel (tambah, edit, hapus produk)",
        "Produk terhubung langsung ke WhatsApp seller (tanpa payment gateway/ongkir otomatis)",
        "SEO Friendly",
        "Integrasi WhatsApp, Maps, Google Analytics",
        "Estimasi pengerjaan 10–15 hari kerja",
        "Free konsultasi",
      ],
      popular: false,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Custom",
      price: "Hubungi Kami",
      description: "Paket custom menawarkan fleksibilitas tanpa batas. Kami bantu wujudkan solusi digital untuk bisnis Anda. Cocok untuk:",
      features: [
        "Integrasi sistem khusus",
        "Fitur spesifik di luar paket standar",
        "Desain & fungsi sesuai permintaan",
      ],
      popular: false,
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white" aria-label="Layanan">
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

        <div className="grid md:grid-cols-4 gap-8">
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
                  {index === 3 && <Settings className="w-6 h-6 text-white" />}
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
                    const waNumber = "62882005225421"
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
  )
}

export default Services