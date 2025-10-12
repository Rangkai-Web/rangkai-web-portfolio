import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"
import Teamwork from "@/assets/others/teamwork.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"

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

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Auto-slide functionality
  useEffect(() => {
    if (!api || testimonials.length < 3) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api, testimonials.length])

  return (
    <section id="testimonials" className="relative" aria-label="Testimoni">
      <div className="absolute inset-0">
        <Image src={Teamwork} alt="Teamwork" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-8">
          <Badge className="text-orange-600 font-medium bg-orange-100 mb-4 text-base">Testimoni</Badge>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Apa Kata Klien Kami?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah mempercayai
            layanan kami
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-0 md:py-10">
              {testimonials.map((t, index) => (
                <CarouselItem key={t.name} className="pb-10 px-2 md:px-4 basis:1/3 lg:basis-1/2 xl:basis-1/3">
                  <div className="bg-white/80 rounded-2xl border border-white p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex justify-items-start items-center flex-col gap-4">
                    <Quote className="size-16 text-orange-500" aria-hidden />
                    <h3 className="font-medium text-2xl">{t.name}</h3>
                    <p className="text-gray-600 text-base text-center">{t.role}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-base text-center">{t.content}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {testimonials.length >= 3 && (
              <>
                <CarouselPrevious className="hidden md:flex bg-white" />
                <CarouselNext className="hidden md:flex bg-white" />
              </>
            )}
          </Carousel>

          {/* Slide Indicators */}
          {testimonials.length >= 3 && (
            <div className="flex justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current - 1 ? "bg-orange-500 w-8" : "bg-gray-300"
                    }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimoni