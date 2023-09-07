import { Link } from 'react-router-dom';
import navImg from '../assets/images/menu.png';
import './NavBar.css';
import logo from '../assets/images/mountain-adventure-club-logo-design-template-f30d0b2135369f3d04623f458d7a8714_screen.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { checkCurrentUser } from '../App';

const NavBar = () => {
  return (
    <div className=" bg-body-tertiary">
      <img
        src={navImg}
        class="pt-4 pb-3 ms-4"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      ></img>
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="d-flex justify-content-start">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <Link to={'/'}>
              <img
                src={logo}
                className="w-50 mt-3 ms-3 "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></img>
            </Link>
          </h5>
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div
          class="offcanvas-body"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          {checkCurrentUser() && (
            <>
              <Link to={'/reservations'} className="nav-link">
                Reservations
              </Link>
              <br></br>
              <Link to={'/addAdventure'} className="nav-link">
                Add Adventure
              </Link>
            </>
          )}

          <br></br>
          {!checkCurrentUser() && (
            <Link to={'/signup'} className="nav-link">
              Signup
            </Link>
          )}

          <br></br>
          {!checkCurrentUser() && (
            <Link to={'/login'} className="nav-link">
              Login
            </Link>
          )}
        </div>

        <div className="sticky-footer mb-2 ms-3 d-flex flex-column">
          <div className="d-flex mb-3">
            <Link to={'/login'} className="nav-link">
              <BsFacebook />
            </Link>
            <Link to={'/login'} className="nav-link">
              <BsInstagram />
            </Link>
            <Link to={'/login'} className="nav-link">
              <BsGoogle />
            </Link>
            <Link to={'/login'} className="nav-link">
              <BsPinterest />
            </Link>
          </div>
          <div className="ms-2">
            <p>
              &copy; Made with ❤ by
              <Link
                to="https://github.com/bilalrajput09"
                className="link-success"
              >
                {' Bilal Ahmed '}
              </Link>
              and TEAM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
