import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import adventureImage from '../assets/images/istockphoto-516449022-612x612.jpg';
import { useDispatch, useSelector } from 'react-redux';
import addNewReservation from '../redux/slice/reservationAction';
import {
  fetchUserReservations,
  deleteReservation,
} from '../redux/slice/reservationAction';

const AdventureShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reserveHandler = () => {
    dispatch(addNewReservation(id));
  };
  const reservations = useSelector((state) => state.reservations.reservations);
  const deleteReserveHandler = () => {
    const idInt = +id;
    const reservation_index = reservations.findIndex((reservation) => {
      return reservation.adventure_id === idInt;
    });

    const reservation_id = reservations[reservation_index].id;
    dispatch(deleteReservation(reservation_id));
    navigate('/');
  };
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);

  const isReserved = checkReservation(reservations, id);
  return (
    <>
      <h1 className="text-center mb-5">Latest Adventures</h1>
      <div className="card mb-3" style={{ maxWidth: '80%' }}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={adventureImage}
              className="img-fluid rounded-start"
              alt="Adventure-img"
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              {isReserved ? (
                <button
                  className="btn btn-secondary"
                  onClick={deleteReserveHandler}
                >
                  Reserved
                </button>
              ) : (
                <button className="btn btn-success" onClick={reserveHandler}>
                  Reserve
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureShow;

const checkReservation = (reservations, id) => {
  const idInt = +id;
  const index = reservations.findIndex((reservation) => {
    return reservation.adventure_id === idInt;
  });
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};
