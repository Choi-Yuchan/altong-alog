import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import translationKo from './translation.ko.json';
import translationEn from './translation.en.json';
import translationJA from './translation.ja.json';
import translationZH from './translation.zh.json';

const resource =  {
    ko: {
        translation: translationKo
    },
    en: {
        translation: translationEn
    },
    ja:{
        translation: translationJA
    },
    zh:{
        translation: translationZH
    }
};

i18n.use(initReactI18next).init({
        resources: resource,
        lng: "ko",
        fallbackLng: 'ko',
        returnObjects: true,
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;