import { useLanguage } from "@/components/language-provider"

const ServicesStrip = () => {
  const { t } = useLanguage()

  return (
    <section className="relative md:absolute inset-0 mx-auto max-w-7xl px-8 md:px-18 pt-32 md:pt-0" aria-label="Services Strip">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 md:-mt-12">
        <div className="bg-rangkai-primary dark:bg-orange-600 text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">10+</div>
          <div className="text-sm">{t('servicesStrip.websitesCreated')}</div>
        </div>
        <div className="bg-rangkai-primary dark:bg-orange-600 text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">7-14</div>
          <div className="text-sm">{t('servicesStrip.daysTurnaround')}</div>
        </div>
        <div className="bg-rangkai-primary dark:bg-orange-600 text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">100%</div>
          <div className="text-sm">{t('servicesStrip.clientSatisfaction')}</div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStrip