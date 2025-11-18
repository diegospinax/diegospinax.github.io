import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as translation_en from './locales/en/translation.json';
import * as translation_es from './locales/es/translation.json';


const resources = {
    en: {
        translation: translation_en
    },
    es: {
        translation: translation_es
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
    });

export default i18n;