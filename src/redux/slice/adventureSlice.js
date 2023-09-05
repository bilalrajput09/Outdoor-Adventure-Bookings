import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAdventuresData from "../adventureActions";
import axios from "axios";
import { useSelector } from "react-redux";

const adventuresInitialState = {
  adventures: [],
  creationSuccess: false,
  creationLoading: false,
  creationError: false,
  deletionSuccess: false,
  deletionLoading: false,
  deletionError: false,
};
export const createAdventure = createAsyncThunk(
  "adventure/create",
  async (username) => {
    try {
      const user_name = useSelector((state) => state.user.name);
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/create_adventure",
        {
           
        }
      );
      return response.data;
    } catch (error) {
      throw error.message; // Throwing error message on failure
    }
  }
);

const adventuresSlice = createSlice({
  name: "adventures",
  initialState: adventuresInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdventuresData.fulfilled, (state, action) => {
      // state.adventures = [...action.payload];
    });
  },
});

export default adventuresSlice.reducer;
