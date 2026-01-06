"use client"

import { Badge } from "@/components/ui/badge"
// import { Topbar } from "@/components/site/Topbar"
import { CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { TEMA } from "@/lib/tema"
import Image from "next/image"
import Link from "next/link"

export default function TemaUndangan() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
          {/* Topbar */}
          {/* <Topbar
            instagram={`https://instagram.com/invite.rangkaiweb`}
            tiktok={`https://tiktok.com/@invite.rangkaiweb`}
          /> */}

          <div className="container mx-auto max-w-8xl px-8 md:px-24 py-14">
            <div className="text-center mb-8">
              <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">Pilih Tema</Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">Tema Undangan</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Pilih jenis acara dan kategori dibawah ini untuk melihat berbagai pilihan tema undangan siap pakai
              </p>
            </div>

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8">
              {TEMA.map((item, index) => (
                <Card key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl group overflow-hidden shadow-2xl">
                  <div className="bg-white dark:bg-gray-700 relative overflow-hidden">
                    <div className="relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={300}
                          className="w-full h-72 group-hover:scale-110 transition-transform duration-300 object-cover object-center"
                        />
                      ) : (
                        <div className="w-full h-72 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-gray-400 dark:text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-medium dark:text-white">{item.name}</CardTitle>
                    <Badge variant="default" className="w-fit border border-orange-400 dark:border-orange-500 text-orange-400 dark:text-orange-500">
                      {item.type === "basic" ? "Pernikahan Basic" : item.type === "premium" ? "Pernikahan Premium" : item.type === "aqiqah" ? "Aqiqah" : "Birthday"}
                    </Badge>
                  </CardHeader>

                  <CardContent className="w-full">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center justify-center w-full px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 text-white hover:opacity-90"
                    >
                      Lihat Tema
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </div>
    )
}
