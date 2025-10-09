import Link from "next/link"
import { CONTACT } from "@/lib/site"
import { Instagram, Mail } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Topbar() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50" aria-label="Topbar">
      <div className="mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <p className="text-balance flex items-center gap-2 hover:text-orange-500">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${CONTACT.email}`} target="_blank">{CONTACT.email}</a>
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`https://instagram.com/rangkaiweb`}
            aria-label="Instagram Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500"
            target="_blank"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          |
          <Link
            href={`https://tiktok.com/${CONTACT.tiktok}`}
            aria-label="Tiktok Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500"
            target="_blank"
          >
            <FaTiktok className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
