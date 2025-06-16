import { describe, expect, test } from '@/../testsSetup';
import {
  formatDate, formatFullDate, formatPrice
} from '@/domain/itineraries/helpers';

describe('Itineraries > formatDate', () => {
  test('Returns a date in the \'DD/MM/YYYY\' format given a '
    + 'date in the \'ItineraryDate\' format', () => {
      const date = { year: 2025, month: 0, dayOfMonth: 1 };
      const formattedDate = formatDate(date);

      expect(formattedDate).toEqual('01/01/2025');
    });
});

describe('Itineraries > formatFullDate', () => {
  test('Returns a date in the \'DD/MM/YYYY HH:MM:SS\' format given a '
    + 'date in the \'ItineraryFullDate\' format', () => {
      const date = {
        year: 2025, month: 0, dayOfMonth: 1,
        hourOfDay: 20, minute: 10, second: 0
      };
      const formattedDate = formatFullDate(date);

      expect(formattedDate).toEqual('01/01/2025 20:10:00');
    });
});

describe('Itineraries > formatPrice', () => {
  test('Returns a price string in the \'0.00\' format given a number', () => {
    const formattedDate = formatPrice(30.5);

    expect(formattedDate).toEqual('30,50 €');
  });
});
