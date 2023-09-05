import { createSlice } from '@reduxjs/toolkit';
import { fetchAdventuresData } from './adventureActions';

const adventuresInitialState = {
  adventures: [],
  query: '',
  results: [],
};

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState: adventuresInitialState,
  reducers: {
    setAdventures: (state, action) => {
      state.adventures = [...action.payload];
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdventuresData.fulfilled, (state, action) => {
      state.adventures = [...action.payload];
    });
  },
});

export const { setAdventures, setQuery, setResults } = adventuresSlice.actions;

export default adventuresSlice.reducer;
