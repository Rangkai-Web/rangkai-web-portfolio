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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white" aria-label="Kontak">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-white/20 text-white hover:bg-white/20 mb-4">📞 Hubungi Kami</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Siap Memulai Project Anda?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Konsultasi gratis untuk menentukan solusi website terbaik untuk bisnis Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-blue-100">info@rangkaiweb.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-blue-100">+62882005225421</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-blue-100">@rangkaiweb</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://wa.me/62882005225421", "_blank")}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Chat WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                onClick={() => window.open("https://instagram.com/rangkaiweb", "_blank")}
              >
                <Instagram className="mr-2 w-4 h-4" />
                Follow Instagram
              </Button>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Kirim Pesan</CardTitle>
              <CardDescription className="text-blue-100">
                Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleContactSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Nama Anda"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    value={contactForm.email}
                    onChange={handleContactChange}
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subjek"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                />
                <Textarea
                  name="message"
                  placeholder="Ceritakan kebutuhan website Anda..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  value={contactForm.message}
                  onChange={handleContactChange}
                />
                <Button type="submit" className="w-full bg-white text-blue-900 hover:bg-blue-50">Kirim Pesan</Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact