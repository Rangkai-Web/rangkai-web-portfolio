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
    <section id="contact" className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white" aria-label="Hubungi Kami">
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-8">
          <Badge className="text-orange-600 dark:text-white font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">Hubungi Kami</Badge>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Konsultasikan Kebutuhan <br/> Website Anda</h2>
          <p className="text-xl text-white/90 dark:text-white max-w-3xl mx-auto">
            Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/20 dark:bg-white/10 border-white/20 dark:border-white/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white dark:text-white font-medium">Kirim Pesan</CardTitle>
              {/* <CardDescription className="text-white">
                Ceritakan kebutuhan website Anda, kami akan merespons dalam 24 jam
              </CardDescription> */}
            </CardHeader>

            <form onSubmit={handleContactSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Nama Anda"
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/30 text-white dark:text-white placeholder:text-white/70 dark:placeholder:text-white/50 outline-none"
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/30 text-white dark:text-white placeholder:text-white/70 dark:placeholder:text-white/50 outline-none"
                    value={contactForm.email}
                    onChange={handleContactChange}
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subjek"
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/30 text-white dark:text-white placeholder:text-white/70 dark:placeholder:text-white/50 outline-none"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                />
                <Textarea
                  name="message"
                  placeholder="Ceritakan kebutuhan website Anda..."
                  rows={4}
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/30 text-white dark:text-white placeholder:text-white/70 dark:placeholder:text-white/50 outline-none"
                  value={contactForm.message}
                  onChange={handleContactChange}
                />
                <Button type="submit" className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-gray-700">Kirim Pesan</Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact