import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { benefits } from "@/lib/benefits"
import { useState, useEffect } from "react"

export function Benefits() {
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
    <section id="keunggulan" className="w-full bg-white pb-32 px-4" aria-label="Keuntungan Menggunakan Jasa Rangkai Web">
      <div className="container mx-auto max-w-6xl text-center">
        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4 text-base">Mengapa Memilih Kami</Badge>
        <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8">Keuntungan Menggunakan Jasa Rangkai Web</h2>

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
              {benefits.map((b, index) => (
                <CarouselItem key={b.title} className="pb-10 px-2 md:px-4 md:basis-1/3">
                  <div className="bg-white rounded-2xl border border-white p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex justify-items-start items-center flex-col gap-4">
                    <b.icon className="size-16 text-orange-500" aria-hidden />
                    <h3 className="font-medium text-2xl">{b.title}</h3>
                    <p className="text-gray-600 text-base">{b.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white" />
            <CarouselNext className="hidden md:flex bg-white" />
          </Carousel>

          {/* Slide Indicators */}
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
        </div>
      </div>
    </section>
  )
}
