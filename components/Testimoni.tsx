import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

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
    <section id="testimonials" className="py-20 px-4 bg-white" aria-label="Testimoni">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">⭐ Testimoni</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah mempercayai
            layanan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni