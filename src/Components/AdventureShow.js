import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import adventureImage from "../assets/images/istockphoto-516449022-612x612.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAnAdventure } from "../redux/slice/adventureSlice";
import addNewReservation from "../redux/slice/reservationAction";
import {
  fetchUserReservations,
  deleteReservation,
} from "../redux/slice/reservationAction";

const AdventureShow = () => {
  const { id, picture } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Add code to fetch adventure details using the adventure ID
  const [adventure, setAdventure] = useState(null);
  const currentAdventure = useSelector(
    (store) => store.adventures.currentAdventure
  );

  useEffect(() => {
    dispatch(getAnAdventure(id));
  }, [dispatch, id]);

  // Use another useEffect to observe changes in currentAdventure
  useEffect(() => {
    console.log("current adventure: ", currentAdventure);
  }, [currentAdventure]);

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
    navigate("/");
  };
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);

  const isReserved = checkReservation(reservations, id);
  return (
    <>
      <h1 className="text-center mb-5">Latest Adventures</h1>
      <div className="card mb-3" style={{ maxWidth: "80%" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={`/display-${currentAdventure.picture}`}
              className="img-fluid rounded-start"
              alt="Adventure-imgaaa"
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{currentAdventure.name}</h5>
              <p className="card-text">{currentAdventure.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Created at {currentAdventure.createdAt}
                </small>
              </p>
              {isReserved ? (
                <button
                  className="btn btn-warning"
                  onClick={deleteReserveHandler}
                >
                  Cancel Reservation
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
