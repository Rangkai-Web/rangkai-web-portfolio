import { BadgeCheck, Clock3, ShieldCheck, BadgeDollarSign, AppWindow, PencilLine, MonitorCheck, HelpingHand, IterationCcw } from "lucide-react"

export type Benefits = {
  icon: any
  title: string
  desc: string
}

export const benefits: Benefits[] = [
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
]