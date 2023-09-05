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
  async ({formData, user}) => {
    try {
      const {name, selectedPicture, description} = formData;
  
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/create_adventure",
        {
          // user_id: user.id,
          name,
          picture: selectedPicture,
          description,
        }
      );
      
      // Check if the response status is 201 (adventure created successfully.)
      if (response.status === 201) {
        return response.data;
      } else if (response.status === 409) {
        // If adventure with the same name already exists
        throw new Error(response.data.message);
      } else {
        throw new Error('Unexpected error occurred');
      }
    } catch (error) {
        throw error.message; 
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
