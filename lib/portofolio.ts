import GayaKitaStore from "@/assets/portofolio/GayaKitaStore.webp";
import Nicofaart from "@/assets/portofolio/nicofaart.webp";
import SmartClean from "@/assets/portofolio/SmartClean.webp";
import Wedding from "@/assets/portofolio/wedding.webp";
import D2C from "@/assets/portofolio/d2c.webp";
import Dukcapil from "@/assets/portofolio/dukcapil.webp";
import Lazcoal from "@/assets/portofolio/lazcoal.webp";
import SmpIPK from "@/assets/portofolio/smpipk.webp";
import Pelabuhan from "@/assets/portofolio/pelabuhan.webp";
import MiningGold from "@/assets/portofolio/mining-gold-min.webp";
import RasaNusa from "@/assets/portofolio/RasaNusa.webp";
import AsihAngger from "@/assets/portofolio/aa1.webp";
import MasterStudio from "@/assets/portofolio/ms2.webp";
import DknDigital from "@/assets/portofolio/dkn.webp";
import NilEntertainment from "@/assets/portofolio/nil.webp";
import Promos from "@/assets/portofolio/promos.webp";
import Sentraoto from "@/assets/portofolio/sentraoto.webp";

export type PortfolioItem = {
  name: string
  type: string
  description: string
  image: any
  tags: string[]
}

export const PORTOFOLIO: Record<'id' | 'en', PortfolioItem[]> = {
  id: [
    {
      name: "Dealer Sentraoto",
      type: "Website Jual Beli Kendaraan",
      description:
        "Website Sentraoto adalah platform jual beli kendaraan yang memudahkan pengguna untuk mencari dan membeli kendaraan impian mereka. Dengan tampilan yang modern dan user-friendly, Sentraoto menyediakan berbagai pilihan kendaraan dengan informasi yang lengkap dan terpercaya.",
      image: Sentraoto,
      tags: ["Jual Beli Kendaraan", "Vehicle", "Auction"],
    },
    {
      name: "Procurement Monitoring System",
      type: "Website Custom",
      description:
        "Sistem berbasis website untuk membantu pengelolaan data dan aktivitas procurement secara efisien. Sistem ini menampilkan berbagai informasi penting seperti dashboard aktivitas, laporan, dokumen, hingga data operasional dalam satu platform.",
      image: Promos,
      tags: ["Procurement", "Monitoring", "Inventory"],
    },
    {
      name: "DKN Digital",
      type: "Company Profile",
      description:
        "Website company profile ini dibangun untuk menampilkan profesionalitas dan kapabilitas perusahaan digital yang membantu untuk pelatihan dan kursus secara online.",
      image: DknDigital,
      tags: ["Training", "Digital", "Online Course"],
    },
    {
      name: "Nil Entertainment",
      type: "Landing Page",
      description:
        "Website Jasa Photobooth & Videobooth dari Bali. Website ini dirancang untuk menampilkan profesionalitas dan kualitas layanan event organizer yang ditawarkan oleh Nil Entertainment.",
      image: NilEntertainment,
      tags: ["Photobooth", "Videobooth", "Event"],
    },
    {
      name: "Master Studio",
      type: "Landing Page",
      description:
        "Website portfolio Jasa Fotografi Master Studio yang berlokasi di Cikampek, Karawang, Jawa Barat. Website ini dirancang untuk memperlihatkan profesionalitas dan kualitas layanan fotografi yang ditawarkan oleh Master Studio.",
      image: MasterStudio,
      tags: ["Fotografi", "Jasa Fotografi", "Portfolio"],
    },
    {
      name: "Asih Angger",
      type: "Landing Page",
      description:
        "Website portfolio Jasa Fotografi Asih Angger. Website ini dibangun untuk meningkatkan visibilitas dan kredibilitas Asih Angger sebagai fotografer profesional.",
      image: AsihAngger,
      tags: ["Fotografi", "Jasa Fotografi", "Portfolio"],
    },
    {
      name: "Nicofaart Woodwork",
      type: "Landing Page",
      description:
        "Website landing page untuk produsen furniture asli Jepara yang menunjukkan kualitas premium dan desain elegan. Dibuat untuk memperkuat branding Nicofaart Woodwork sebagai penyedia furniture berkualitas tinggi yang dikerjakan oleh tukang kayu profesional Jepara.",
      image: Nicofaart,
      tags: ["Furniture"],
    },
    {
      name: "SMPI-PK Muhammadiyah Delanggu Klaten",
      type: "Company Profile",
      description:
        "Website sekolah yang dikembangkan untuk menampilkan informasi seputar kegiatan akademik, berita, serta galeri siswa. Memudahkan pihak sekolah dalam menyebarkan informasi artikel atau berita tentang sekolah tersebut.",
      image: SmpIPK,
      tags: ["Sekolah", "Education", "Portal"],
    },
    {
      name: "Inventaris Dukcapil",
      type: "Website Custom",
      description:
        "Sistem berbasis website untuk membantu pengelolaan data inventaris Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bantul. Dirancang agar proses pencatatan, pelaporan, dan pencarian inventaris menjadi lebih cepat dan akurat.",
      image: Dukcapil,
      tags: ["CMS", "Government", "Inventory"],
    },
    {
      name: "Sistem Monitoring & Informasi Pelabuhan",
      type: "Website Custom",
      description:
        "Website CMS yang dirancang khusus untuk membantu pengelolaan data dan aktivitas pelabuhan secara efisien. Sistem ini menampilkan berbagai informasi penting seperti dashboard aktivitas, laporan, dokumen, hingga data operasional dalam satu platform terintegrasi.",
      image: Pelabuhan,
      tags: ["CMS", "Monitoring", "Informasi"],
    },
    {
      name: "Mining Gold",
      type: "Company Profile",
      description:
        "Website company profile ini dibangun untuk menampilkan profesionalitas dan kapabilitas perusahaan kontraktor pertambangan secara komprehensif. Desainnya menggabungkan elemen industri yang kuat dan modern.",
      image: MiningGold,
      tags: ["Kontraktor", "Pertambangan", "Coal"],
    },
    {
      name: "D2C Gaming Store",
      type: "Online Shop",
      description:
        "Website top-up game online dengan sistem keranjang, katalog, dan notifikasi pesanan via WhatsApp. Didesain agar pengguna dapat melakukan pembelian saldo game secara cepat, aman, dan praktis.",
      image: D2C,
      tags: ["E-commerce", "Game", "Online Store"],
    },
    {
      name: "LAZ Coal Mandiri",
      type: "Company Profile",
      description:
        "Website company profile ini dibangun untuk menampilkan profesionalitas dan kapabilitas perusahaan kontraktor pertambangan secara komprehensif. Desainnya menggabungkan elemen industri yang kuat dan modern.",
      image: Lazcoal,
      tags: ["Kontraktor", "Pertambangan", "Coal"],
    },
    {
      name: "SmartClean",
      type: "Landing Page",
      description:
        "Landing Page produk cairan pembersih ramah lingkungan dengan fokus konversi (CTA beli sekarang, testimoni, dan highlight keunggulan produk).",
      image: SmartClean,
      tags: ["E-commerce", "Conversion"],
    },
    {
      name: "GayaKita Store",
      type: "Landing Page",
      description:
        "Website toko online baju lokal, fitur katalog, keranjang, checkout, dan notifikasi pesanan via WhatsApp.",
      image: GayaKitaStore,
      tags: ["E-commerce", "Fashion", "Online Store"],
    },
    {
      name: "Jasa Wedding Organizer",
      type: "Landing Page",
      description:
        "Website landing page ini dirancang untuk menampilkan keindahan dan profesionalitas dari layanan wedding organizer. Fokus utamanya adalah menciptakan kesan pertama yang romantis dan meyakinkan, agar calon pengantin merasa tertarik saat akses landing page.",
      image: Wedding,
      tags: ["Wedding", "Event", "Organizer"],
    },
    {
      name: "RasaNusa Company Profile",
      type: "Company Profile",
      description:
        "RasaNusa adalah brand kuliner modern yang menghadirkan cita rasa autentik Nusantara melalui hidangan restoran, paket catering, dan bumbu siap masak berkualitas premium.",
      image: RasaNusa,
      tags: ["Masakan Nusantara", "Kuliner", "Restaurant"],
    },
  ],
  en: [
    {
      name: "Dealer Sentraoto",
      type: "Vehicle Dealership Website",
      description:
        "Sentraoto Website is a vehicle buy-and-sell platform that makes it easy for users to find and buy their dream vehicle. With a modern and user-friendly interface, Sentraoto provides various vehicle choices with complete and trusted information.",
      image: Sentraoto,
      tags: ["Vehicle Buy & Sell", "Vehicle", "Auction"],
    },
    {
      name: "Procurement Monitoring System",
      type: "Custom Website",
      description:
        "A web-based system to help manage procurement data and activities efficiently. This system displays various key information such as activity dashboards, reports, documents, and operational data in a single platform.",
      image: Promos,
      tags: ["Procurement", "Monitoring", "Inventory"],
    },
    {
      name: "DKN Digital",
      type: "Company Profile",
      description:
        "This company profile website was built to showcase the professionalism and capability of a digital company that helps with training and online courses.",
      image: DknDigital,
      tags: ["Training", "Digital", "Online Course"],
    },
    {
      name: "Nil Entertainment",
      type: "Landing Page",
      description:
        "Photobooth & Videobooth services website from Bali. This website is designed to showcase the professionalism and quality of event organizer services offered by Nil Entertainment.",
      image: NilEntertainment,
      tags: ["Photobooth", "Videobooth", "Event"],
    },
    {
      name: "Master Studio",
      type: "Landing Page",
      description:
        "Photography services portfolio website of Master Studio located in Cikampek, Karawang, West Java. This website is designed to display the professionalism and quality of photography services offered by Master Studio.",
      image: MasterStudio,
      tags: ["Photography", "Photography Services", "Portfolio"],
    },
    {
      name: "Asih Angger",
      type: "Landing Page",
      description:
        "Photography services portfolio website of Asih Angger. This website is built to increase the visibility and credibility of Asih Angger as a professional photographer.",
      image: AsihAngger,
      tags: ["Photography", "Photography Services", "Portfolio"],
    },
    {
      name: "Nicofaart Woodwork",
      type: "Landing Page",
      description:
        "Landing page website for an authentic Jepara furniture manufacturer showing premium quality and elegant design. Built to strengthen Nicofaart Woodwork's branding as a provider of high-quality furniture crafted by professional Jepara woodworkers.",
      image: Nicofaart,
      tags: ["Furniture"],
    },
    {
      name: "SMPI-PK Muhammadiyah Delanggu Klaten",
      type: "Company Profile",
      description:
        "School website developed to display information about academic activities, news, and student galleries. It makes it easier for the school to distribute articles or news about the school.",
      image: SmpIPK,
      tags: ["School", "Education", "Portal"],
    },
    {
      name: "Inventaris Dukcapil",
      type: "Custom Website",
      description:
        "A web-based system to help manage inventory data of the Population and Civil Registration Agency of Bantul Regency. Designed to make recording, reporting, and searching inventory faster and more accurate.",
      image: Dukcapil,
      tags: ["CMS", "Government", "Inventory"],
    },
    {
      name: "Sistem Monitoring & Informasi Pelabuhan",
      type: "Custom Website",
      description:
        "A CMS website specifically designed to help manage port data and activities efficiently. This system displays various key information such as activity dashboards, reports, documents, and operational data in a single integrated platform.",
      image: Pelabuhan,
      tags: ["CMS", "Monitoring", "Information"],
    },
    {
      name: "Mining Gold",
      type: "Company Profile",
      description:
        "This company profile website was built to showcase the professionalism and capability of a mining contractor company comprehensively. The design combines strong and modern industrial elements.",
      image: MiningGold,
      tags: ["Contractor", "Mining", "Coal"],
    },
    {
      name: "D2C Gaming Store",
      type: "Online Shop",
      description:
        "Online game top-up website with a shopping cart system, catalog, and order notifications via WhatsApp. Designed so users can purchase game balance quickly, safely, and practically.",
      image: D2C,
      tags: ["E-commerce", "Game", "Online Store"],
    },
    {
      name: "LAZ Coal Mandiri",
      type: "Company Profile",
      description:
        "This company profile website was built to showcase the professionalism and capability of a mining contractor company comprehensively. The design combines strong and modern industrial elements.",
      image: Lazcoal,
      tags: ["Contractor", "Mining", "Coal"],
    },
    {
      name: "SmartClean",
      type: "Landing Page",
      description:
        "Landing page for eco-friendly cleaning liquid product with a conversion focus (Buy Now CTA, testimonials, and highlight of product advantages).",
      image: SmartClean,
      tags: ["E-commerce", "Conversion"],
    },
    {
      name: "GayaKita Store",
      type: "Landing Page",
      description:
        "Online store website for local clothing, featuring a catalog, shopping cart, checkout, and order notifications via WhatsApp.",
      image: GayaKitaStore,
      tags: ["E-commerce", "Fashion", "Online Store"],
    },
    {
      name: "Jasa Wedding Organizer",
      type: "Landing Page",
      description:
        "This landing page website is designed to showcase the beauty and professionalism of wedding organizer services. The main focus is to create a romantic and convincing first impression, so that prospective couples are interested when accessing the landing page.",
      image: Wedding,
      tags: ["Wedding", "Event", "Organizer"],
    },
    {
      name: "RasaNusa Company Profile",
      type: "Company Profile",
      description:
        "RasaNusa is a modern culinary brand presenting authentic Nusantara flavors through restaurant dishes, catering packages, and premium quality ready-to-cook spices.",
      image: RasaNusa,
      tags: ["Nusantara Cuisine", "Culinary", "Restaurant"],
    },
  ]
}
