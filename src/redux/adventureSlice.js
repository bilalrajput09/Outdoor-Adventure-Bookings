import { createSlice } from '@reduxjs/toolkit';
import fetchAdventuresData from './adventureActions';

const adventuresInitialState = {
  adventures: [],
};

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState: adventuresInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdventuresData.fulfilled, (state, action) => {
      state.adventures = [...action.payload];
    });
  },
});

export default adventuresSlice.reducer;
