"use client"

import { HeroSection } from "@/components/invite/Hero"
import { FeaturesSection } from "@/components/invite/Features"
import { ThemeSection } from "@/components/invite/Theme"
// import { Topbar } from "@/components/site/Topbar"

export default function TemaUndangan() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
          {/* <Topbar
            instagram={`https://instagram.com/invite.rangkaiweb`}
            tiktok={`https://tiktok.com/@invite.rangkaiweb`}
          /> */}
          <HeroSection />
          <FeaturesSection />
          <ThemeSection />
      </div>
    )
}
