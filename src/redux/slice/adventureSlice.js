import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAdventuresData from "../adventureActions";
import axios from "axios";

const adventuresInitialState = {
  adventures: [],
  creationSuccess: false,
  creationLoading: false,
  creationError: false,
  deletionSuccess: false,
  deletionLoading: false,
  deletionError: false,
  error: null,
};
export const createAdventure = createAsyncThunk(
  "adventure/create",
  async ({ formData, user }) => {
    try {
      const { name, selectedPicture, description } = formData;
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
        // Throw a custom error with the desired message
        throw new Error();
      } else {
        throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }
);

export const getAllAdventures = createAsyncThunk("adventure/get", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/api/v1/adventures");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const adventuresSlice = createSlice({
  name: "adventures",
  initialState: adventuresInitialState,
  reducers: {
    setErrorMessage: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    resetCreationError: (state) => ({
      ...state,
      creationError: false,
      creationSuccess: false,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdventuresData.fulfilled, (state, action) => {
      // state.adventures = [...action.payload];
    });
    builder.addCase(createAdventure.pending, (state) => {
      // Set loading flags for login
      state.creationSuccess = false;
      state.creationLoading = true;
      state.creationError = false;
    });
    builder.addCase(createAdventure.fulfilled, (state, action) => {
      // Update state on successful login
      state.creationSuccess = true;
      state.creationLoading = false;
      state.creationError = false;
      state.error = null;
    });
    builder.addCase(createAdventure.rejected, (state, action) => {
      // Update state on login failure
      state.creationSuccess = false;
      state.creationLoading = true;
      state.creationError = true;
      if (action.error.message === "Request failed with status code 409") {
        console.log("yee: ", action.error.message);
        state.error = "Adventure by this name already exists.";
      }
    });
    builder.addCase(getAllAdventures.pending, (state) => {});
    builder.addCase(getAllAdventures.fulfilled, (state, action) => {
      // state.adventures.splice(0);
      state.adventures.push(action.payload);
    });
    builder.addCase(getAllAdventures.rejected, (state, action) => {});
  },
});

export const { setErrorMessage, resetCreationError } = adventuresSlice.actions;
export default adventuresSlice.reducer;
