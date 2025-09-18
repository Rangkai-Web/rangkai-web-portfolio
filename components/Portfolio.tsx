import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import GayaKitaStore from "@/assets/GayaKitaStore.png"
import Nicofaart from "@/assets/nicofaart.png"
import SmartClean from "@/assets/SmartClean.png"
// import SMKDigitalNusantara from "@/assets/SMKDigitalNusantara.png"
import D2C from "@/assets/d2c.png"
import Dukcapil from "@/assets/dukcapil.png"
import Lazcoal from "@/assets/lazcoal.png"
import SmpIPK from "@/assets/smpipk.png"
import Pelabuhan from "@/assets/pelabuhan.png"
import MiningGold from "@/assets/mining-gold-min.png"

const Portfolio = () => {
  const portfolioItems = [
    {
      name: "Nicofaart",
      type: "Landing Page",
      description: "Produsen furniture dari Jepara dengan kualitas premium. Furniture berkualitas tinggi dengan tukang kayu terbaik dari Jepara.",
      image: Nicofaart,
      tags: ["Landing Page", "Furniture"],
    },
    {
      name: "SMPI-PK Muhammadiyah Delanggu Klaten",
      type: "Sekolah",
      description:
        "Website sekolah dengan halaman berita, pengumuman, galeri kegiatan, dan sistem upload artikel dari admin panel.",
      image: SmpIPK,
      tags: ["Sekolah", "Education", "Portal"],
    },
    {
      name: "Inventaris Dinas Kependudukan dan Pencatatan Sipil",
      type: "CMS - Inventaris Dukcapil",
      description:
        "Website inventaris dinas kependudukan dan pencatatan sipil kabupaten Bantul dengan fitur pencatatan, laporan, dan pencarian inventaris.",
      image: Dukcapil,
      tags: ["CMS", "Government", "Inventory"],
    },
    {
      name: "Sistem Monitoring & Informasi Pelabuhan",
      type: "CMS - Monitoring & Informasi Pelabuhan",
      description:
        "Website CMS monitoring dan informasi pelabuhan ahmad yani yang mengelola informasi seperti dashboard, laporan, dokumen, dll.",
      image: Pelabuhan,
      tags: ["CMS", "Monitoring", "Informasi"],
    },
    {
      name: "Mining Gold",
      type: "Kontraktor Pertambangan",
      description:
        "Website yang menyediakan jasa kontraktor pertambangan.",
      image: MiningGold,
      tags: ["Kontraktor", "Pertambangan", "Coal"],
    },
    {
      name: "D2C Gaming Store",
      type: "Topup Game Online",
      description:
        "Website topup game online dengan fitur katalog, keranjang, checkout, dan notifikasi pesanan via WhatsApp.",
      image: D2C,
      tags: ["E-commerce", "Game", "Online Store"],
    },
    {
      name: "LAZ Coal Mandiri",
      type: "Kontraktor Pertambangan",
      description:
        "Website yang menyediakan jasa kontraktor pertambangan.",
      image: Lazcoal,
      tags: ["Kontraktor", "Pertambangan", "Coal"],
    },
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
    // {
    //   name: "SMK Digital Nusantara",
    //   type: "CMS - Portal Informasi Sekolah",
    //   description:
    //     "Website sekolah dengan halaman berita, pengumuman, galeri kegiatan, dan sistem upload artikel dari admin panel.",
    //   image: SMKDigitalNusantara,
    //   tags: ["CMS", "Education", "Portal"],
    // },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" aria-label="Portofolio">
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
            <Card key={index} className="bg-gray-100 group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-white relative overflow-hidden">
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
  )
}

export default Portfolio