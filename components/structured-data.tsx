export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rangkai Web",
    "description": "Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau",
    "url": "https://rangkaiweb.com",
    "logo": "https://rangkaiweb.com/assets/others/Logo-2.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62882005225421",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/rangkaiweb"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "1-10",
    "serviceArea": {
      "@type": "Country",
      "name": "Indonesia"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website",
    "description": "Layanan pembuatan website profesional untuk bisnis, landing page, toko online, dan company profile",
    "provider": {
      "@type": "Organization",
      "name": "Rangkai Web"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paket Layanan Website",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page",
            "description": "Paket hemat untuk personal atau bisnis dengan 1 halaman responsif"
          },
          "price": "1000000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Company Profile",
            "description": "Website 3 halaman dengan desain custom dan responsif"
          },
          "price": "1500000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Shop",
            "description": "Toko online lengkap dengan admin panel dan integrasi WhatsApp"
          },
          "price": "2500000",
          "priceCurrency": "IDR"
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rangkai Web",
    "url": "https://rangkaiweb.com",
    "description": "Jasa pembuatan website profesional dengan harga terjangkau",
    "publisher": {
      "@type": "Organization",
      "name": "Rangkai Web"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rangkaiweb.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rangkai Web",
    "description": "Jasa pembuatan website profesional untuk bisnis di Indonesia",
    "url": "https://rangkaiweb.com",
    "telephone": "+62882005225421",
    "email": "info@rangkaiweb.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "openingHours": "Mo-Su 08:00-22:00",
    "priceRange": "Rp1.000.000 - Rp5.000.000",
    "serviceArea": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Website",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Company Profile"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Shop"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
