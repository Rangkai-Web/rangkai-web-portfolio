export type Package = {
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
  color: string
}

export const PACKAGES: Record<'id' | 'en', Package[]> = {
  id: [
    {
      name: "Landing Page",
      price: "Mulai dari Rp1.000.000",
      description: "Paket hemat untuk promosi bisnis, produk, atau layanan dalam satu halaman profesional.",
      features: [
        "1 Halaman (Landing Page)",
        "Desain Responsif",
        "Konten Dasar (Tentang, Produk/Jasa, Kontak)",
        "Integrasi WhatsApp",
        "SEO Friendly",
        "Estimasi pengerjaan 3-5 Hari Kerja",
        "Free Konsultasi",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Company Profile",
      price: "Mulai dari Rp1.500.000",
      description: "Paket ideal untuk bisnis, perusahaan, atau instansi yang ingin memiliki website profesional untuk memperkenalkan brand, produk, dan layanan secara lengkap.",
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
      description: "Paket lengkap untuk bisnis yang ingin menjual produk langsung lewat website secara profesional dan efisien.",
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
      name: "Website Custom",
      price: "Hubungi Kami untuk Estimasi Harga Custom",
      description: "Paket Website Custom menawarkan fleksibilitas bagi bisnis yang membutuhkan fitur tambahan di luar paket standar (tanpa AI). Kami bantu wujudkan website dengan desain dan fungsi yang disesuaikan sepenuhnya dengan kebutuhan spesifik Anda.",
      features: [
        "Integrasi sistem khusus",
        "Fitur spesifik di luar paket standar",
        "Desain & fungsi sesuai permintaan",
      ],
      popular: false,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Website Custom + Integrasi AI",
      price: "Hubungi Kami untuk Estimasi Harga Custom",
      description: "⁠Paket Website Custom + Integrasi AI menghadirkan sistem website dengan kemampuan AI seperti otomatisasi proses, chatbot interaktif, analisis data (data insight), dan berbagai fitur cerdas lainnya. Cocok untuk kebutuhan bisnis, instansi, atau perusahaan yang ingin meningkatkan efisiensi dan produktivitas dengan teknologi AI.",
      features: [
        "Integrasi AI",
        "Fitur spesifik di luar paket standar",
        "Desain & fungsi sesuai permintaan",
      ],
      popular: false,
      color: "from-cyan-500 to-cyan-600",
    },
  ],
  en: [
    {
      name: "Landing Page",
      price: "Starting from Rp1,000,000",
      description: "Budget package to promote businesses, products, or services on a single professional page.",
      features: [
        "1 Page (Landing Page)",
        "Responsive Design",
        "Basic Content (About, Products/Services, Contact)",
        "WhatsApp Integration",
        "SEO Friendly",
        "Estimated completion 3-5 Business Days",
        "Free Consultation",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Company Profile",
      price: "Starting from Rp1,500,000",
      description: "Ideal package for businesses, companies, or institutions that want a professional website to introduce their brand, products, and services comprehensively.",
      features: [
        "3 Pages",
        "Custom & Responsive Design",
        "Photo Gallery / Product Catalog",
        "WhatsApp & Maps Integration",
        "SEO Friendly",
        "Estimated completion 5–7 Business Days",
        "Free Consultation",
      ],
      popular: true,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Online Shop",
      price: "Starting from Rp2,500,000",
      description: "Complete package for businesses that want to sell products directly through their website professionally and efficiently.",
      features: [
        "3–5 Pages",
        "Custom & Responsive Design",
        "Admin Panel (add, edit, delete products)",
        "Products connect directly to WhatsApp seller (without payment gateway/auto shipping)",
        "SEO Friendly",
        "WhatsApp, Maps, Google Analytics Integration",
        "Estimated completion 10–15 business days",
        "Free consultation",
      ],
      popular: false,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Custom Website",
      price: "Contact Us for Custom Price Estimate",
      description: "The Custom Website package offers flexibility for businesses that need additional features beyond standard packages (without AI). We help realize a website with design and functionality fully customized to your specific needs.",
      features: [
        "Custom system integration",
        "Specific features beyond standard packages",
        "Tailored design & functionality",
      ],
      popular: false,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Custom Website + AI Integration",
      price: "Contact Us for Custom Price Estimate",
      description: "⁠The Custom Website + AI Integration package brings website systems with AI capabilities such as process automation, interactive chatbots, data analysis (data insight), and other smart features. Perfect for businesses, institutions, or companies looking to increase efficiency and productivity with AI technology.",
      features: [
        "AI Integration",
        "Specific features beyond standard packages",
        "Tailored design & functionality",
      ],
      popular: false,
      color: "from-cyan-500 to-cyan-600",
    },
  ],
}