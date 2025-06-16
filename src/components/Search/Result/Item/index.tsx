'use client';

import { formatFullDate, formatPrice } from '@/domain/itineraries/helpers';
import { Itinerary } from '@/domain/itineraries/types';
import './styles.css';

const ResultItem = ({
  arrivalDate, arrivalLocation,
  departureDate, departureLocation,
  carrier, price
}: Itinerary) => (
  <div className="card-itinerary">
    <div>
      <h4>Departure 🛫</h4>
      <p>{departureLocation} at {formatFullDate(departureDate)}</p>
    </div>
    <div>
      <h4>Arrival 🛬</h4>
      <p>{arrivalLocation} at {formatFullDate(arrivalDate)}</p>
    </div>
    <footer>
      <i>Fly with {carrier}</i>
      <div className="card-itinerary-price">
        <p className="disabled">From</p>
        <strong>{formatPrice(price)}</strong>
      </div>
    </footer>
  </div>
);

export default ResultItem;