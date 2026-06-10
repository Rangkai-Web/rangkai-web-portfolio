import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gift, Music, Heart, Camera, MapPin, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const DigitalInvitationServices = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Gift,
      title: t("digitalInvitation.features.themes.title"),
      description: t("digitalInvitation.features.themes.desc")
    },
    {
      icon: Music,
      title: t("digitalInvitation.features.features.title"),
      description: t("digitalInvitation.features.features.desc")
    },
    {
      icon: Users,
      title: t("digitalInvitation.features.invites.title"),
      description: t("digitalInvitation.features.invites.desc")
    },
    {
      icon: Calendar,
      title: t("digitalInvitation.features.instant.title"),
      description: t("digitalInvitation.features.instant.desc")
    }
  ]

  return (
    <section id="digital-invitation" className="bg-white dark:bg-gray-900" aria-label={t("digitalInvitation.badge")}>
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-16">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">{t("digitalInvitation.badge")}</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
            {t("digitalInvitation.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("digitalInvitation.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-orange-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://invite.rangkaiweb.com/", "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {t("digitalInvitation.btnText")}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DigitalInvitationServices

