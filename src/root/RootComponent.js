import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SignOutBtn from '../Components/SignOutBtn';
import { useSelector } from 'react-redux';
import { checkCurrentUser, currentUserObj } from '../App';
import { authenticateUser } from '../redux/slice/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserReservations } from '../redux/slice/reservationAction';

const RootComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkCurrentUser()) {
      dispatch(authenticateUser(currentUserObj()));
      dispatch(fetchUserReservations());
    }
  }, [dispatch]);
  console.log('RootComponent');
  return (
    <>
      <NavBar />
      {user !== null && (
        <div className="container d-flex justify-content-end">
          <SignOutBtn />
        </div>
      )}

      <div className="container wrapper d-flex flex-column min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootComponent;
