import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PORTOFOLIO } from "@/lib/portofolio"

const Portfolio = () => {

  return (
    <section id="portfolio" className="bg-white" aria-label="Portofolio">
      <div className="container mx-auto max-w-7xl px-8 md:px-24 xl:px-8 py-32">
        <div className="text-center mb-8">
          <Badge className="text-orange-600 font-medium bg-orange-100 mb-4 text-base">Portofolio</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Karya Terbaik Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat beberapa project website yang telah kami kerjakan untuk berbagai jenis bisnis
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PORTOFOLIO.map((item, index) => (
            <Card key={index} className="bg-gray-100 border border-gray-300 rounded-2xl group overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-72 group-hover:scale-110 transition-transform duration-300 object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
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
                <CardTitle className="text-xl font-medium">{item.name}</CardTitle>
                <Badge variant="outline" className="w-fit bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  {item.type}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio