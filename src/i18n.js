import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(LanguageDetector) // detects browser's current language
  .use(initReactI18next) // initializes i18next with react-i18next
  .init({
    resources: {
       en: { translation: enTranslation },
       fr: { translation: frTranslation },
    }, // feel free to add any other you want!
    lng: 'en', // default language
    interpolation: {
      escapeValue: false, // This ensures raw HTML in translations (if needed)
    },
    fallbackLng: "en", // if language isn't detected, use this by default
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // saves preferences
    },
 });
export default i18n;