import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// Initial state for the userSlice
const initialState = {
  user: null,                       // User information
  error: null,                      // General error
  message: "",                       // General message
  isAuthenticated: false,           // Authentication status
  isSignupLoading: false,           // Loading state for signup
  isSignupSuccess: false,           // Signup success status
  isSignupError: false,             // Signup error status
  isLoginLoading: false,            // Loading state for login
  isLoginSuccess: false,            // Login success status
  isLoginError: false,              // Login error status
};

// Async action to sign up a user
export const signup = createAsyncThunk("user/signup", async (username) => {
  try {
    const response = await axios.post("http://127.0.0.1:3000/api/v1/signup", {
      username,
    });
    console.log(response.status); // Logging the response status

    return response.data; // Successful response data
  } catch (error) {
    throw new Error("Signup failed. Please check your username."); // Throwing custom error message on failure
  }
});

// Redux slice to manage user-related state
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer to log out a user
    logout: (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }),
  },
  extraReducers: (builder) => {
    // Reducer cases for the 'signup' action
    builder.addCase(signup.pending, (state) => {
      // Set loading flags for signup
      state.isSignupLoading = true;
      state.isSignupSuccess = false;
      state.isSignupError = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      // Update state on successful signup
      state.isAuthenticated = true;
      state.isSignupLoading = false;
      state.isSignupSuccess = true;
      state.isSignupError = false;
      state.user = action.payload;
      state.message = action.payload;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      // Update state on signup failure
      state.isSignupSuccess = false;
      state.isSignupLoading = false;
      state.isSignupError = true;
      state.error = "Signup failed. Please check your username.";
    });
  },
});

// Export the 'logout' action from the slice
export const { logout } = userSlice.actions;

// Export the userSlice reducer
export default userSlice.reducer;
