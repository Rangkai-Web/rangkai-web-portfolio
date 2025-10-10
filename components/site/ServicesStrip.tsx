
const ServicesStrip = () => {
  return (
    <section className="relative md:absolute inset-0 mx-auto max-w-7xl px-8 md:px-18 xl:px-8 pt-32 md:pt-0" aria-label="Services Strip">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 md:-mt-12">
        <div className="bg-rangkai-primary text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">10+</div>
          <div className="text-sm">Website Dibuat</div>
        </div>
        <div className="bg-rangkai-primary text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">7-14</div>
          <div className="text-sm">Hari Pengerjaan</div>
        </div>
        <div className="bg-rangkai-primary text-white rounded-lg p-10 shadow-lg text-center">
          <div className="text-5xl">100%</div>
          <div className="text-sm">Kepuasan Klien</div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStrip