import { BadgeCheck, Clock3, ShieldCheck, BadgeDollarSign, AppWindow, PencilLine, MonitorCheck, HelpingHand, IterationCcw } from "lucide-react"

export type BenefitItem = {
  icon: any
  title: string
  desc: string
}

export const benefits: Record<'id' | 'en', BenefitItem[]> = {
  id: [
    {
      icon: BadgeDollarSign,
      title: "Gratis Konsultasi",
      desc: "Konsultasikan kebutuhan website Anda secara gratis untuk menemukan solusi terbaik sejak awal.",
    },
    {
      icon: BadgeCheck,
      title: "Harga Bersahabat",
      desc: "Tidak perlu khawatir soal biaya, Anda bisa menyesuaikan paket sesuai kebutuhan dan membayar 50% di awal.",
    },
    {
      icon: ShieldCheck,
      title: "Performa Cepat dan Stabil",
      desc: "Setiap website dioptimalkan agar ringan, cepat diakses, dan nyaman digunakan di semua perangkat.",
    },
    {
      icon: MonitorCheck,
      title: "Teknologi Modern",
      desc: "Website dikembangkan dengan teknologi modern berbasis code, namun jasa kami tetap fleksibel jika Anda membutuhkan website berbasis WordPress.",
    },
    {
      icon: AppWindow,
      title: "Gratis Domain & Hosting",
      desc: "Nikmati paket lengkap dengan domain dan hosting gratis untuk tahun pertama.",
    },
    {
      icon: PencilLine,
      title: "Gratis Copywriting",
      desc: "Kami bantu menyusun teks copywriting di halaman website agar tampil menarik dan sesuai dengan brand Anda.",
    },
    {
      icon: Clock3,
      title: "Bebas Kustom Sesuai Kebutuhan",
      desc: "Website dirancang sesuai karakter bisnis Anda, termasuk integrasi fitur modern seperti AI atau sistem otomatisasi.",
    },
    {
      icon: HelpingHand,
      title: "Dukungan Penuh Setelah Website Jadi",
      desc: "Kami tetap mendampingi setelah website aktif , dari maintenance hingga pembaruan konten.",
    },
    {
      icon: IterationCcw,
      title: "Proses Jelas & Transparan",
      desc: "Setiap tahap pembuatan kami sampaikan secara terbuka, agar Anda selalu tahu progress proyek.",
    },
  ],
  en: [
    {
      icon: BadgeDollarSign,
      title: "Free Consultation",
      desc: "Consult your website needs for free to find the best solution right from the start.",
    },
    {
      icon: BadgeCheck,
      title: "Affordable Pricing",
      desc: "No need to worry about costs, you can customize the package to fit your needs and pay a 50% deposit.",
    },
    {
      icon: ShieldCheck,
      title: "Fast & Stable Performance",
      desc: "Each website is optimized to be lightweight, fast-loading, and responsive across all devices.",
    },
    {
      icon: MonitorCheck,
      title: "Modern Technology",
      desc: "Websites are developed with modern code-based technologies, but our services remain flexible if you need a WordPress website.",
    },
    {
      icon: AppWindow,
      title: "Free Domain & Hosting",
      desc: "Enjoy a complete package with a free domain and hosting for the first year.",
    },
    {
      icon: PencilLine,
      title: "Free Copywriting",
      desc: "We help craft copywriting on your website pages to make them engaging and aligned with your brand.",
    },
    {
      icon: Clock3,
      title: "Fully Customizable",
      desc: "Websites are designed according to your business character, including the integration of modern features like AI or automation.",
    },
    {
      icon: HelpingHand,
      title: "Full Post-Launch Support",
      desc: "We continue to support you after the website is live, from maintenance to content updates.",
    },
    {
      icon: IterationCcw,
      title: "Clear & Transparent Process",
      desc: "We share every stage of development openly so you always know the progress of your project.",
    },
  ]
}