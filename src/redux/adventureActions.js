import { createAsyncThunk } from '@reduxjs/toolkit';
import { SET_QUERY, SET_RESULTS } from './actionTypes';

const fetchAdventuresData = createAsyncThunk('fetch/adventures', async () => {
  const response = await fetch(
    'https://outdoor-adventures.onrender.com/api/v1/adventures',
  );

  const data = await response.json();
  return data;
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const setResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});

export default fetchAdventuresData;
