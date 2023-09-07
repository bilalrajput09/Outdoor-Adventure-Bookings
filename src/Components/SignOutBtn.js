import { logout } from '../redux/slice/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SignOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(logout());
    navigate('/login');
    localStorage.removeItem('id');
  };
  return (
    <div className="cursor-pointer">
      <div
        className="text-center position-relative mt-3   cursor-pointer"
        onClick={logOutUser}
      >
        <img src="/log-out.png" alt="Log Out" style={{ cursor: 'pointer' }} />
        <p>
          <b>S-out</b>
        </p>
      </div>
    </div>
  );
};

export default SignOutBtn;
