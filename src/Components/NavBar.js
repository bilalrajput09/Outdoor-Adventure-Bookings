import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { logout } from '../redux/slice/userSlice';
import navImg from '../assets/images/menu.png';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutUser = () => {
    // dispatch(logout());
    navigate('/login');
    localStorage.removeItem('id');
  };
  return (
    <>
      <div className="position-absolute top-0 end-0 m-10 cursor-pointer">
        <div
          className="text-center position-relative m-4  cursor-pointer"
          onClick={logOutUser}
        >
          <img
            src="/log-out.png"
            className="text-center position-relative justify-content-end mt"
            alt="Log Out"
            style={{ cursor: 'pointer' }}
          />
          <p>
            <b>S-out</b>
          </p>
        </div>
      </div>
      <img
        src={navImg}
        class="mt-4 ml-3"
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
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <Link to={'/reservations'}>Reservations</Link>
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;



