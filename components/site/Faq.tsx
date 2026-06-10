import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "../ui/badge"
import { useLanguage } from "@/components/language-provider"

const faqItems = {
  id: [
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
  ],
  en: [
    {
      q: "What is Rangkai Web?",
      a: "Rangkai Web is a professional website development service provider for businesses, MSMEs, and institutions. We help realize modern, mobile-friendly websites that are ready to build your online identity.",
    },
    {
      q: "Can I consult first before ordering?",
      a: "Of course! You can have a free consultation via WhatsApp to determine the type of website, design, or features that best suit your needs.",
    },
    {
      q: "Does the price include maintenance or updates?",
      a: "Yes, it includes free minor maintenance for 1 year (updating text/small images or resolving minor errors).",
    },
    {
      q: "What is the website ordering process at Rangkai Web?",
      a: `
            <ul class="list-disc list-inside space-y-2">
              <li>Contact us via WhatsApp.</li>
              <li>Consult requirements & choose a package.</li>
              <li>Down payment or full payment.</li>
              <li>Complete website preparation documents and send content materials.</li>
              <li>Website development process including revisions.</li>
              <li>Final payment and publishing the website.</li>
            </ul>
          `
    },
    {
      q: "Can I choose between custom code or WordPress?",
      a: `
        <p>Yes, of course.</p>
        <p>Rangkaiweb supports two development options:</p>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li><strong>WordPress</strong> for websites that need to be built quickly, easily managed, and are more cost-efficient.</li>
          <li><strong>Custom Code</strong> for websites with unique features or designs, high performance, and full flexibility.</li>
        </ul>
        <p class="mt-2">Our team will help determine the technology that best fits your project requirements and budget.</p>
      `,
    },
    {
      q: "Can I customize the design or features?",
      a: "Yes. For special requirements, you can choose the Custom Website or Custom Website + AI Integration package.",
    },
    {
      q: "Can I request additional pages outside the package?",
      a: "Yes, of course. You can add extra pages outside the main package based on your business needs. Each additional page will be charged based on the complexity and type of content. The Rangkai Web team will provide a price estimate before starting the work.",
    },
    {
      q: "What if I already have my own hosting and domain?",
      a: "You can still use the hosting and domain you already own. The Rangkai Web team will adjust the creation and setup process with your accounts.",
    },
  ]
}

export function FAQ() {
  const { language, t } = useLanguage()
  const currentItems = faqItems[language] || faqItems.id

  return (
    <section id="faq" className="bg-white dark:bg-gray-900" aria-label={t('faq.badge')}>
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="flex flex-col items-center justify-center w-full mb-8">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">{t('faq.badge')}</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 text-center">
            {t('faq.title')} <br/> 
            <span className="bg-gradient-to-r from-orange-300 to-rangkai-primary dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {t('faq.titleHighlight')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <Accordion type="single" collapsible className="w-full">
            {currentItems.slice(0, Math.ceil(currentItems.length / 2)).map((it, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-left cursor-pointer text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pl-3">
                  <div dangerouslySetInnerHTML={{ __html: it.a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {currentItems.slice(Math.ceil(currentItems.length / 2)).map((it, idx) => (
              <AccordionItem key={idx} value={`item-r-${idx}`} className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-left cursor-pointer text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pl-3">
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
