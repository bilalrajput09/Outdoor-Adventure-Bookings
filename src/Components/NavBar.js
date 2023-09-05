import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logout());
    navigate("/login");
    localStorage.removeItem("id");
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
            style={{ cursor: "pointer" }}
          />
          <p><b>S-out</b></p>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Offcanvas with body scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
