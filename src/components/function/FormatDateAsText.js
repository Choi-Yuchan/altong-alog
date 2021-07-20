import { useTranslation } from 'react-i18next';

function FormatDateAsText(props) {
    const {t}  = useTranslation();
    const curDate = props;

    const gap = Date.now() - curDate;
    const gapSec = gap / 1000;
    const gapMin = gapSec / 60;
    const gapHour = gapMin / 60;
    const gapDay = gapHour / 24;
    const gapMonth = gapDay / 30;
    const gapYear = gapMonth / 12;

    if (gapHour <= 24) {
        if (Math.floor(gapMin) < 1) {
            if (Math.floor(gapSec) <= 0) {
                return t('FormatDate')[0];
            } else {
                return Math.floor(gapSec) + t('FormatDate')[1];
            }
        } else if (Math.floor(gapHour) < 1) {
            return Math.floor(gapMin) + t('FormatDate')[2];
        } else {
            return Math.floor(gapHour) + t('FormatDate')[3]
        }
    } else {
        if (gapYear >= 1) {
            return Math.floor(gapYear) + t('FormatDate')[4];
        } else if (gapMonth >= 1) {
            return Math.floor(gapMonth) + t('FormatDate')[5];
        } else {
            return Math.floor(gapDay) + t('FormatDate')[6];
        }
    }
}
export default FormatDateAsText;