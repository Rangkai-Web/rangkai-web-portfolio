import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gift, Music, Heart, Camera, MapPin, Calendar, Users } from "lucide-react"

const DigitalInvitationServices = () => {
  const features = [
    {
      icon: Gift,
      title: "Beragam Pilihan Tema",
      description: "Kami menyediakan banyak pilihan tema untuk undangan online yang bisa langsung Anda gunakan atau sesuaikan sesuai kebutuhan Anda."
    },
    {
      icon: Music,
      title: "Fitur Lengkap dan Interaktif",
      description: "Tampilkan informasi lengkap acara seperti peta, countdown, galeri, backsound musik, serta doa dan ucapan langsung dari tamu undangan."
    },
    {
      icon: Users,
      title: "Undangan Tanpa Batas",
      description: "Sebar undangan ke tamu sebanyak mungkin tanpa batas. Jangkau lebih banyak orang tanpa khawatir ada yang tak kebagian undangan Anda."
    },
    {
      icon: Calendar,
      title: "Kirim Undangan Instan",
      description: "Bagikan undangan digital dengan cepat dan mudah lewat WhatsApp ke kontak yang Anda miliki. Undangan bisa langsung diterima dan dibaca oleh tamu undangan."
    }
  ]

  return (
    <section id="digital-invitation" className="bg-white" aria-label="Layanan Undangan Digital">
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-16">
          <Badge className="text-orange-600 font-medium bg-orange-100 mb-4 text-base">Layanan Undangan Digital</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Ahlinya Jasa Undangan Website
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menawarkan Jasa Undangan Website untuk Pernikahan, Khitan, Ulang Tahun, Aqiqah dan Walimatussafar. Kami siap membuat undangan digital yang bukan hanya cantik, tapi juga fungsional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://invite.rangkaiweb.com/", "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Lihat Tema Undangan
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DigitalInvitationServices

