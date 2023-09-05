import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import adventureImage from '../assets/images/istockphoto-516449022-612x612.jpg';
import { fetchUserReservations } from '../redux/slice/reservationAction';

const ReservationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);
  const reservations = useSelector((state) => state.reservations.reservations);
  return (
    <>
      <h1 className="text-center mb-5">Reservations</h1>
      {reservations.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reservations.map((reservation) => (
            <Link
              to={'/adventures/' + reservation.adventure_id}
              key={reservation.id}
              className="btn"
            >
              <div className="col">
                <div className="card h-100">
                  <img
                    src={adventureImage}
                    className="card-img-top"
                    alt="Adventure"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Reservation</h5>
                    <p className="card-text">This is the reservation.</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ReservationList;
