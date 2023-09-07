import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserReservations } from '../redux/slice/reservationAction';
import Adventure from './Adventure';

const ReservationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);
  const reservations = useSelector((state) => state.reservations.reservations);
  const adventures = useSelector((state) => state.adventures.adventures);
  const adventures_ids = reservations.map(
    (reservation) => reservation.adventure_id,
  );
  if (!adventures[0]) {
    return;
  }
  const reservedAdventures = adventures[0].filter((adventure) =>
    adventures_ids.includes(adventure.id),
  );
  return (
    <>
      <h1 className="text-center mb-5 mt-5">My Reservations</h1>
      {reservations.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reservedAdventures.map((adventure) => (
            <Link
              to={'/adventures/' + adventure.id}
              key={adventure.id}
              className="btn"
            >
              <Adventure
                name={adventure.name}
                key={adventure.id}
                picture={adventure.picture}
                description={adventure.description}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ReservationList;
