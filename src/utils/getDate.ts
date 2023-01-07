import { TDate } from '../types/date';
export const getDate = (date = new Date(), lang = navigator.language): TDate => {
    const week = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(date);
    return {
        nowISO: new Intl.DateTimeFormat(lang).format(date),
        week: week[0].toUpperCase() + week.slice(1),
        month: new Intl.DateTimeFormat(lang, { month: 'long' }).format(date),
        weekShort: new Intl.DateTimeFormat(lang, { weekday: 'short' }).format(date),
        date: new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long', day: 'numeric' }).format(date),
    };
};

export const dateHour = (date: Date = new Date()): { date: Date; time: number } => {
    const nowDateHour = new Date(Math.floor(date.getTime() / (3600 * 1000)) * (3600 * 1000));
    return {
        date: nowDateHour,
        time: nowDateHour.getTime() / 1000,
    };
};
