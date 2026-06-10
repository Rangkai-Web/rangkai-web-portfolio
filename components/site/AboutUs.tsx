import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Woman from "@/assets/others/woman-holding-mac.webp"
import { useLanguage } from "@/components/language-provider"

const AboutUs = () => {
  const { t } = useLanguage()

  return (
    <section id="about-us" className="bg-white dark:bg-gray-900 container mx-auto max-w-7xl px-8 md:px-24 py-32 md:mt-20" aria-label={t('nav.aboutUs')}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center justify-center">
          <div className="text-left">
            <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">{t('about.badge')}</Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
              {t('about.description')}
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