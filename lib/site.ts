export const BRAND = {
  name: "Rangkai Web",
  tagline: "Jasa Pembuatan Website Profesional & Terpercaya",
  brief: "Kami bantu bisnis Anda tampil profesional dengan website cepat, responsif, dan terintegrasi WhatsApp.",
}

export const CONTACT = {
  instagram: "@rangkaiweb",
  tiktok: "@rangkaiweb",
  whatsapp: "+62882005225421",
  email: "info@rangkaiweb.com",
}

export function whatsappHref(message?: string) {
  const phone = CONTACT.whatsapp.replace(/[^\d]/g, "")
  const base = `https://wa.me/${phone}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
