import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const RootComponent = () => {
  return (
    <>
      <NavBar />
      <div className="container wrapper d-flex flex-column min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootComponent;
