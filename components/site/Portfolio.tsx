"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"
import { PORTOFOLIO } from "@/lib/portofolio"

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: any; alt: string; name?: string; description?: string } | null>(null)

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900" aria-label="Portofolio">
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-8">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">Portofolio</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">Karya Terbaik Kami</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lihat beberapa project website yang telah kami kerjakan untuk berbagai jenis bisnis
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PORTOFOLIO.map((item, index) => (
            <Card key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl group overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white dark:bg-gray-700 relative overflow-hidden">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setSelectedImage({ src: item.image, alt: item.name, name: item.name, description: item.description })}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-72 group-hover:scale-110 transition-transform duration-300 object-contain object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-auto">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-white/20 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-medium dark:text-white">{item.name}</CardTitle>
                <Badge variant="outline" className="w-fit bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 text-white">
                  {item.type}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.name || selectedImage.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                {selectedImage.description || `Portfolio ${selectedImage.alt}`}
              </DialogDescription>
              <div className="relative w-full h-auto max-h-[90vh] flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  priority
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Portfolio