import Link from "next/link"
import { CONTACT } from "@/lib/site"
import { Instagram, Mail } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Topbar() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800" aria-label="Topbar">
      <div className="mx-auto px-6 py-2 text-sm flex items-center justify-between">
        <p className="text-balance flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${CONTACT.email}`} target="_blank">{CONTACT.email}</a>
        </p>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <Link
            href={`https://instagram.com/rangkaiweb`}
            aria-label="Instagram Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            target="_blank"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link
            href={`https://tiktok.com/${CONTACT.tiktok}`}
            aria-label="Tiktok Rangkaiweb"
            className="hover:opacity-80 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            target="_blank"
          >
            <FaTiktok className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
