import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/slice/userSlice';
import { useEffect } from 'react';

function RegisterForm() {
  // Extracting user-related state and functions from Redux
  const { user, isAuthenticated, isSignupSuccess, isSignupError } = useSelector(
    (store) => store.user,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myInputRef = useRef();

  useEffect(() => {
    // Redirect to the adventures page if successfully registered and not facing signup error
    if (isAuthenticated && !isSignupError) {
      navigate('/');
    }
  }, [
    dispatch,
    isAuthenticated,
    isSignupSuccess,
    user,
    isSignupError,
    navigate,
  ]);

  const handleRegister = (event) => {
    // Dispatch the signup action with the entered username
    event.preventDefault();
    dispatch(signup(myInputRef.current.value));
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <form className="col-8" onSubmit={handleRegister}>
          <h1 className="mb-5">Sign up</h1>
          <div className="mb-3">
            <input
              type="text"
              className="col-8 form-control"
              placeholder="Enter username"
              ref={myInputRef}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Signup
          </button>
          <p>
            Don't have an account? <Link to={'/login'}>Login</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
