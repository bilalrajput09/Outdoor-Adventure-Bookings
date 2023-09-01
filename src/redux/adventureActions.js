import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAdventuresData = createAsyncThunk('fetch/adventures', async () => {
  const response = await fetch('http://localhost:3000/api/v1/adventures');

  const data = await response.json();
  return data;
});

export default fetchAdventuresData;
