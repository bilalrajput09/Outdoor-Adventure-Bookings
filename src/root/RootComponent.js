import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SignOutBtn from '../Components/SignOutBtn';
import { checkCurrentUser } from '../App';

const RootComponent = () => {
  return (
    <>
      <NavBar />
      {checkCurrentUser() && (
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
