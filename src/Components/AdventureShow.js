import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnAdventure } from '../redux/slice/adventureSlice';
import addNewReservation from '../redux/slice/reservationAction';
import { deleteAdventure } from '../redux/slice/adventureSlice';
import {
  fetchUserReservations,
  deleteReservation,
} from '../redux/slice/reservationAction';
import { checkCurrentUser } from '../App';

const AdventureShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAdventure = useSelector(
    (store) => store.adventures.currentAdventure,
  );

  const { deletionSuccess, deletionLoading, deletionError } = useSelector(
    (state) => state.adventures,
  );
  const user = useSelector((state) => state.user.user);

  // Add code to fetch adventure details using the adventure ID
  const [formattedDate, setFormattedDate] = useState(new Date());
  const [adventureName, setAdventureName] = useState('');
  const [adventurePicture, setAdventurePicture] = useState('');
  const [adventureDescription, setAdventureDescription] = useState('');
  const options = useState({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  if (!checkCurrentUser()) {
    navigate('/login');
  }

  useEffect(() => {
    dispatch(getAnAdventure(id));
  }, [dispatch, id]);

  // Use another useEffect to observe changes in currentAdventure
  useEffect(() => {
    if (currentAdventure) {
      setAdventureName(currentAdventure.name);
      setAdventurePicture(currentAdventure.picture);
      setAdventureDescription(currentAdventure.description);
    }
  }, [currentAdventure]);

  const reservations = useSelector((state) => state.reservations.reservations);
  const [isReserved, setIsReserved] = useState(
    checkReservation(reservations, id),
  );
  const reserveHandler = () => {
    dispatch(addNewReservation(id));
    setIsReserved(true);
  };
  const deleteReserveHandler = () => {
    const idInt = +id;
    const reservation_index = reservations.findIndex((reservation) => {
      return reservation.adventure_id === idInt;
    });

    const reservation_id = reservations[reservation_index].id;
    dispatch(deleteReservation(reservation_id));
    setIsReserved(false);
  };

  // deleting adventure
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);

  // redirect to adventure list on successfull deletion
  useEffect(() => {
    deletionSuccess && navigate('/');
  }, [deletionSuccess]);

  const handleDelete = () => {
    dispatch(deleteAdventure(id));
  };

  return (
    <>
      <h1 className="text-center mb-5">{adventureName}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={`/display-${adventurePicture}`}
              className="img-fluid rounded-start"
              alt={`${adventureName} image`}
            ></img>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <div className="card-body">
              <h5 className="card-title">{adventureName}</h5>
              <p className="card-text">{adventureDescription}</p>
              <p className="card-text">
                <small className="text-body-secondary mt-auto">
                  Created at{' '}
                  {formattedDate.toLocaleDateString('en-US', options)}
                </small>
              </p>
            </div>
            {user !== null && (
              <div className="row">
                <div className="col">
                  <div className="mt-auto m-2 d-flex justify-content-between ">
                    {isReserved ? (
                      <button
                        className="btn btn-warning"
                        onClick={deleteReserveHandler}
                      >
                        Cancel Reservation
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={reserveHandler}
                      >
                        Reserve
                      </button>
                    )}
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Delete Adventure
                    </button>
                  </div>
                </div>
              </div>
            )}
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
