import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"
import Teamwork from "@/assets/others/teamwork.webp"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"
import { useLanguage } from "@/components/language-provider"

const Testimoni = () => {
  const { t } = useLanguage()
  const currentTestimonials = (t('testimonials.items') as any[]) || []

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
    if (!api || currentTestimonials.length < 3) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api, currentTestimonials.length])

  return (
    <section id="testimonials" className="relative" aria-label={t('testimonials.badge')}>
      <div className="absolute inset-0">
        <Image src={Teamwork} alt="Teamwork" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-8">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">{t('testimonials.badge')}</Badge>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-white/90 dark:text-white max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
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
              {currentTestimonials.map((testimonialItem, index) => (
                <CarouselItem key={testimonialItem.name} className="pb-10 px-2 md:px-4 basis:1/3 lg:basis-1/2 xl:basis-1/3">
                  <div className="bg-white/80 dark:bg-gray-800/90 rounded-2xl border border-white dark:border-gray-700 p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex justify-items-start items-center flex-col gap-4">
                    <Quote className="size-16 text-orange-500 dark:text-orange-400" aria-hidden />
                    <h3 className="font-medium text-2xl dark:text-white">{testimonialItem.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base text-center">{testimonialItem.role}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonialItem.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-500 dark:fill-orange-400 text-orange-500 dark:text-orange-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-base text-center">{testimonialItem.content}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {currentTestimonials.length >= 3 && (
              <>
                <CarouselPrevious className="hidden md:flex bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700" />
                <CarouselNext className="hidden md:flex bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700" />
              </>
            )}
          </Carousel>

          {/* Slide Indicators */}
          {currentTestimonials.length >= 3 && (
            <div className="flex justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current - 1 ? "bg-orange-500 dark:bg-orange-400 w-8" : "bg-gray-300 dark:bg-gray-600"
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