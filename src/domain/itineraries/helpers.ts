import { ItineraryDate, ItineraryFullDate } from '@/domain/itineraries/types';

const leadingZero = (number: number) => number < 10 ? `0${number}` : number;

export const formatDate = (date: ItineraryDate) => {
  const day = leadingZero(date.dayOfMonth);
  const month = leadingZero(date.month + 1);
  return `${day}/${month}/${date.year}`;
}

export const formatFullDate = (fullDate: ItineraryFullDate) => {
  const date = formatDate(fullDate);
  const time =
    `${leadingZero(fullDate.hourOfDay)}:` +
    `${leadingZero(fullDate.minute)}:` +
    `${leadingZero(fullDate.second)}`;
  return `${date} ${time}`;
}

export const formatPrice = (price: number) =>
  `${price.toFixed(2).replace('.', ',')} €`;