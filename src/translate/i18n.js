import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationBE from './be.json';
import translationRU from './ru.json';

i18n
// .use(LanguageDetector) // use to set basic language of user's browser language
    .use(initReactI18next)
    .init({
    // we init with resources
        resources: {
            en: {
                translations: translationEN
            },
            be: {
                translations: translationBE
            },
            ru: {
                translations: translationRU
            }
        },
        fallbackLng: 'ru',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        // keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export { i18n };
