'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

export type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id')

  useEffect(() => {
    const stored = localStorage.getItem('rangkai-web-lang') as Language
    if (stored === 'id' || stored === 'en') {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('rangkai-web-lang', lang)
  }

  // A simple t function that resolves dot notation: "hero.title" -> translations[lang].hero.title
  const t = (key: string): any => {
    const keys = key.split('.')
    let translation: any = translations[language] || translations['id']
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k as keyof typeof translation]
      } else {
        // Fallback to Indonesian if key not found in active language
        let fallback: any = translations['id']
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk as keyof typeof fallback]
          } else {
            return key // fallback to key itself if still not found
          }
        }
        return fallback
      }
    }
    return translation
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
