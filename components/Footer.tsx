import Image from "next/image"
import Logo from "@/assets/Logo-2.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Rangkai Web" width={48} height={48} className="rounded-full" />
              <span className="text-xl font-bold text-white">Rangkai <span className="text-orange-500">Web</span></span>
            </div>
            <p className="text-gray-400">
              Jasa pembuatan website profesional dengan harga terjangkau untuk semua jenis bisnis.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Landing Page</li>
              <li>Website Bisnis</li>
              <li>Toko Online</li>
              <li>Website Sekolah</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tentang Kami</li>
              <li>Portofolio</li>
              <li>Testimoni</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@rangkaiweb.com</li>
              <li>+62882005225421</li>
              <li>@rangkaiweb</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rangkai Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer