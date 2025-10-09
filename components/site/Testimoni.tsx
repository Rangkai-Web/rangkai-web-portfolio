import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"
import Teamwork from "@/assets/others/teamwork.jpg"
import Image from "next/image"

const Testimoni = () => {
  const testimonials = [
    {
      name: "Nico Faal Akbar",
      role: "Owner Nicofaart Woodwork",
      content:
        "Terima kasih rangkai web, pelayanan nya sangat baik membuat saya nyaman! Hasil websitenya pun bagus sekali melebihi ekspektasi saya 😍",
      rating: 5,
    },
    {
      name: "Hari Purnomo",
      role: "Guru Informatika SMPI-PK Muhammadiyah",
      content:
        "Kami sangat puas dengan hasil website yang dibuat oleh Rangkai Web. Tampilan websitenya modern, mudah digunakan, dan sesuai dengan kebutuhan sekolah kami. Dengan adanya website ini, informasi kegiatan dan profil sekolah bisa tersampaikan dengan baik kepada orang tua, siswa, maupun masyarakat luas.",
      rating: 5,
    },
    {
      name: "Fitria Agustina",
      role: "Pegawai Dukcapil",
      content:
        "Website yang dibuat oleh Rangkai Web sangat membantu dalam melayani masyarakat. Tampilan websitenya modern, mudah digunakan, dan sesuai dengan kebutuhan dukcapil. Dengan adanya website ini, informasi kegiatan dan profil dukcapil bisa tersampaikan dengan baik kepada masyarakat luas.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="relative py-32 px-4" aria-label="Testimoni">
      <div className="absolute inset-0">
        <Image src={Teamwork} alt="Teamwork" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative container mx-auto">
        <div className="text-center mb-8">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4 text-base">Testimoni</Badge>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Apa Kata Klien Kami?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah mempercayai
            layanan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-white shadow-2xl bg-white/80 transition-shadow duration-300">
              <CardHeader>
                <Quote className="w-10 h-10 fill-orange-500 text-orange-500" />
                <CardTitle className="text-xl font-medium">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni