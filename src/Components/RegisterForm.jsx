import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/slice/userSlice";
import { useEffect } from "react";

function RegisterForm() {
  // Extracting user-related state and functions from Redux
  const { user, error, isAuthenticated, isSignupSuccess, isSignupError } =
    useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Redirect to the adventures page if successfully registered and not facing signup error
    if (isAuthenticated && !isSignupError) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, isSignupSuccess, user, isSignupError]);

  const handleRegister = async () => {
    // Dispatch the signup action with the entered username
    dispatch(signup(username));
  };

  return (
    <>
      <div>
        <h2>Register</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        <br />
        <br />
        <p>{error ? error : ""}</p>
      </div>
      {/* Navigation link to the login page */}
      <p onClick={() => navigate("/login")}>Already Signed up? Login.</p>
    </>
  );
}

export default RegisterForm;
