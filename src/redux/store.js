import { configureStore } from "@reduxjs/toolkit";
import adventureSlice from "./slice/adventureSlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
  reducer: { adventures: adventureSlice, user: userReducer },
});

export default store;
