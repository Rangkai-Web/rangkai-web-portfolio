import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  CheckCircle,
  Users,
  Award,
  Zap,
  Settings,
  Brain,
} from "lucide-react"
import { PACKAGES } from "@/lib/packages"
import { CONTACT, whatsappHref } from "@/lib/site"
import { useState, useEffect } from "react"
const Services = () => {
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

  return (
    <section id="services" className="bg-[#F7F7F7]" aria-label="Paket Layanan Pembuatan Website">
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-8 md:mb-0">
          <Badge className="text-orange-600 font-medium bg-orange-100 mb-4 text-base">Paket Layanan Pembuatan Website</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Pilih Paket Sesuai Kebutuhan Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari UMKM hingga enterprise, kami memiliki solusi website yang tepat untuk setiap skala bisnis
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
            <CarouselContent className="-ml-2 md:-ml-4 md:py-12">
              {PACKAGES.map((pkg, index) => (
                <CarouselItem key={index} className="p-4 md:pr-8 basis:1/3 lg:basis-1/2 xl:basis-1/3">
                  <Card
                    className={`relative rounded-2xl bg-white border-0 md:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full ${
                      pkg.popular ? "ring-4 ring-orange-500" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 text-sm font-medium">
                        Terpopuler
                      </div>
                    )}

                    <div className="flex flex-col">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4`}
                        >
                          {index === 0 && <Zap className="w-6 h-6 text-white" />}
                          {index === 1 && <Award className="w-6 h-6 text-white" />}
                          {index === 2 && <Users className="w-6 h-6 text-white" />}
                          {index === 3 && <Settings className="w-6 h-6 text-white" />}
                          {index === 4 && <Brain className="w-6 h-6 text-white" />}
                        </div>
                        <CardTitle className="mb-4 text-lg font-medium px-3 py-1 bg-orange-100 text-orange-500 w-fit rounded-full">{pkg.name}</CardTitle>
                        <div className="text-3xl text-gray-900">{pkg.price}</div>
                        <CardDescription className="text-base">{pkg.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>

                    <CardFooter>
                      <Button
                        className={`w-full text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90`}
                        onClick={() => {
                          const waNumber = CONTACT.whatsapp
                          const text =
                            `Halo, saya tertarik dengan paket website berikut:\n` +
                            `Paket: ${pkg.name}\n` +
                            `Harga: ${pkg.price}\n` +
                            `Deskripsi: ${pkg.description}`
                          const waUrl = whatsappHref(`${text}`)
                          window.open(waUrl, "_blank")
                        }}
                      >
                        Pilih Paket Ini
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 md:mt-0 space-x-2">
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
        </div>
      </div>
    </section>
  )
}

export default Services