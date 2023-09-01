import { configureStore } from '@reduxjs/toolkit';
import adventureSlice from './adventureSlice';

const store = configureStore({
  reducer: { adventures: adventureSlice },
});

export default store;
