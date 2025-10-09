"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "../ui/badge"

const items = [
  {
    q: "Apa itu Rangkai Web?",
    a: "Rangkai Web adalah penyedia jasa pembuatan website profesional untuk bisnis, UMKM, dan instansi. Kami bantu wujudkan tampilan website yang modern, mobile-friendly, dan siap digunakan untuk membangun identitas online.",
  },
  {
    q: "Apakah bisa konsultasi dulu sebelum order?",
    a: "Tentu! Anda bisa konsultasi gratis via WhatsApp untuk menentukan jenis website, desain, atau fitur yang paling sesuai kebutuhan.",
  },
  {
    q: "Apakah harga sudah termasuk maintenance atau update?",
    a: "Ya, sudah termasuk maintenance minor gratis selama 1 tahun (update teks/gambar kecil atau perbaikan error ringan).",
  },
  {
    q: "Bagaimana proses pemesanan website di Rangkai Web?",
    a: `
          <ul class="list-disc list-inside space-y-2">
            <li>Hubungi kami via WhatsApp.</li>
            <li>Konsultasi kebutuhan & pilih paket.</li>
            <li>Pembayaran DP atau pelunasan</li>
            <li>Melengkapi dokumen persiapan website dan kirim bahan konten.</li>
            <li>Proses pengerjaan website termasuk revisi.</li>
            <li>Pelunasan dan publish website.</li>
          </ul>
        `
  },
  {
    q: "Apakah saya bisa memilih teknologi berbasis code atau WordPress?",
    a: `
      <p>Ya, tentu bisa.</p>
      <p>Rangkaiweb mendukung dua opsi pengembangan:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>WordPress</strong> untuk kebutuhan website yang ingin cepat jadi, mudah dikelola, dan lebih efisien secara biaya.</li>
        <li><strong>Custom Code</strong> untuk kebutuhan website dengan fitur atau desain unik, performa tinggi, dan fleksibilitas penuh.</li>
      </ul>
      <p class="mt-2">Tim kami akan membantu menentukan teknologi yang paling sesuai dengan kebutuhan dan anggaran proyek Anda.</p>
    `,
  },
  {
    q: "Apakah bisa custom desain atau fitur?",
    a: "Bisa. Untuk kebutuhan khusus, Anda bisa pilih paket Website Custom atau Website Custom + Integrasi AI.",
  },
  {
    q: "Apakah bisa request penambahan halaman di luar paket?",
    a: "Ya, tentu bisa. Anda bisa menambah halaman tambahan di luar paket utama sesuai kebutuhan bisnis. Setiap halaman tambahan akan dikenakan biaya sesuai tingkat kompleksitas dan jenis kontennya. Tim Rangkai Web akan memberikan estimasi harga terlebih dahulu sebelum pengerjaan dilakukan.",
  },
  {
    q: "Bagaimana jika sudah memiliki hosting dan domain sendiri?",
    a: "Anda tetap bisa menggunakan hosting dan domain yang sudah Anda miliki. Tim Rangkai Web akan menyesuaikan proses pembuatan dan setup website dengan akun tersebut.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-4" aria-label="FAQ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-full mb-8">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4 text-base">FAQ</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Pertanyaan Umum Seputar Layanan Rangkai Web</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Accordion type="single" collapsible className="w-full">
            {items.slice(0, Math.ceil(items.length / 2)).map((it, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="">
                <AccordionTrigger className="text-lg font-medium text-left cursor-pointer hover:text-orange-500 hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-3">
                  <div dangerouslySetInnerHTML={{ __html: it.a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {items.slice(Math.ceil(items.length / 2)).map((it, idx) => (
              <AccordionItem key={idx} value={`item-r-${idx}`}>
                <AccordionTrigger className="text-lg font-medium text-left cursor-pointer hover:text-orange-500 hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-3">
                  <div dangerouslySetInnerHTML={{ __html: it.a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
