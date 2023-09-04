import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { login } from '../redux/slice/userSlice';

function LoginForm() {
  // Extracting user-related state and functions from Redux
  const { user, error, isAuthenticated, isLoginSuccess, isLoginError } =
    useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const loginMessage = useSelector((state) => state.user.message);

  useEffect(() => {
    // Redirect to the adventures page if successfully logged in and not facing login error
    if (isAuthenticated && !isLoginError) {
      navigate('/');
    }
  }, [dispatch, isAuthenticated, isLoginSuccess, user, isLoginError]);

  const handleLogin = async () => {
    // Dispatch the login action with the entered username
    dispatch(login(username));
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <form className="col-8">
          <h1 className="mb-5">Login</h1>
          <div className="mb-3">
            <input
              type="text"
              className="col-8 form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
          <p>{isLoginError && error}</p>
          <p onClick={() => navigate('/signup')}>
            Don't have an account? Signup.
          </p>
        </form>
        {/* Display login message if login is successful */}
        <p>{isLoginSuccess && loginMessage}</p>

        {/* Display error message if login fails */}
      </div>
    </div>
  );
}

export default LoginForm;
