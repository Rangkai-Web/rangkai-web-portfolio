import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Woman from "@/assets/others/woman-holding-mac.jpeg"

const AboutUs = () => {
  return (
    <section id="about-us" className="container mx-auto max-w-7xl px-8 md:px-24 py-32 md:mt-20" aria-label="Tentang Kami">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center justify-center">
          <div className="text-left">
            <Badge className="text-orange-600 font-medium bg-orange-100 mb-4 text-base">Rangkai Web</Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8">Membangun Website, Menguatkan Brand</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rangkai Web hadir sebagai solusi tepat untuk membantu pelaku usaha dan instansi bertransformasi ke dunia digital dengan identitas online yang kuat dan berkarakter.
              Kami menggabungkan desain estetis, teknologi modern, dan strategi pemasaran untuk menghadirkan website yang tidak hanya menarik secara visual, tetapi juga profesional dan berorientasi pada hasil. <br/><br/>
              Setiap detail kami pikirkan, mulai dari struktur konten, pemilihan warna, kecepatan loading, hingga optimasi SEO, agar setiap pengunjung website mendapatkan pengalaman yang menyenangkan dan terpercaya.
              Bersama Rangkai Web, website bukan sekadar halaman online biasa, tetapi representasi digital dari kualitas dan nilai bisnis Anda.
            </p>
          </div>
          <div className="relative bg-transparent">
            <Image
              src={Woman}
              alt="woman holding mac"
              width={600}
              height={500}
              className="rounded-2xl hover:scale-105 transition-all duration-300"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs