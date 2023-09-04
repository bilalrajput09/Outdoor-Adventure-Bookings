import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../redux/slice/userSlice";

function LoginForm() {
  // Extracting user-related state and functions from Redux
  const { user, error, isAuthenticated, isLoginSuccess, isLoginError } =
    useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const loginMessage = useSelector((state) => state.user.message);

  useEffect(() => {
    // Redirect to the adventures page if successfully logged in and not facing login error
    if (isAuthenticated && !isLoginError) {
      navigate("/adventures");
    }
  }, [dispatch, isAuthenticated, isLoginSuccess, user, isLoginError]);

  const handleLogin = async () => {
    // Dispatch the login action with the entered username
    dispatch(login(username));
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        {/* Display login message if login is successful */}
        <p>{isLoginSuccess && loginMessage}</p>
        
        {/* Display error message if login fails */}
        <p>{isLoginError && error}</p>
      </div>
      <br />
      <br />
      {/* Navigation link to the signup page */}
      <p onClick={() => navigate("/signup")}>Don't have an account? Signup.</p>
    </>
  );
}

export default LoginForm;
