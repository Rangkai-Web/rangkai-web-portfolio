import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  Mail,
  Instagram,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waNumber = "62882005225421"
    const text =
      `Halo, saya ingin konsultasi website.\n` +
      `Nama: ${contactForm.name}\n` +
      `Email: ${contactForm.email}\n` +
      `Subjek: ${contactForm.subject}\n` +
      `Pesan: ${contactForm.message}`
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
    window.open(waUrl, "_blank")
  }

  return (
    <section id="contact" className="relative py-32 px-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white" aria-label="Hubungi Kami">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4 text-base">Hubungi Kami</Badge>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Konsultasikan Kebutuhan <br/> Website Anda</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/20 border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white font-medium">Kirim Pesan</CardTitle>
              {/* <CardDescription className="text-white">
                Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
              </CardDescription> */}
            </CardHeader>

            <form onSubmit={handleContactSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Nama Anda"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white outline-none"
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white outline-none"
                    value={contactForm.email}
                    onChange={handleContactChange}
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subjek"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white outline-none"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                />
                <Textarea
                  name="message"
                  placeholder="Ceritakan kebutuhan website Anda..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white outline-none"
                  value={contactForm.message}
                  onChange={handleContactChange}
                />
                <Button type="submit" className="w-full bg-white text-gray-900 hover:bg-white/80">Kirim Pesan</Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact