import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Palette,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { whatsappHref } from "@/lib/site";
import { useLanguage } from "@/components/language-provider";

const LogoDesign = () => {
  const { language, t } = useLanguage();

  const benefits = t("logoDesign.benefits") as unknown as string[];

  const handleOrder = () => {
    const text =
      language === "id"
        ? "Halo, saya tertarik dengan layanan Jasa Desain Logo."
        : "Hello, I'm interested in the Logo Design service.";
    window.open(whatsappHref(text), "_blank");
  };

  return (
    <section
      id="logo-design"
      className="bg-[#F7F7F7] dark:bg-gray-900"
      aria-label={t("logoDesign.badge")}
    >
      <div className="container mx-auto max-w-7xl px-8 md:px-24 py-32">
        <div className="text-center mb-12">
          <Badge className="text-orange-600 dark:text-orange-400 font-medium bg-orange-100 dark:bg-orange-900/30 mb-4 text-base">
            {t("logoDesign.badge")}
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
            {t("logoDesign.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {t("logoDesign.subtitle")}
          </p>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-600 hover:text-white hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950/30"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1UkctYa6VJwWKwA6uvARzNffib7gMdp9M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t("logoDesign.portfolioBtnText")}
            </a>
          </Button>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="rounded-2xl bg-white dark:bg-gray-800 border-0 dark:border-gray-700 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                {t("logoDesign.cardTitle")}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90"
                onClick={handleOrder}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("logoDesign.btnText")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LogoDesign;
