import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUserObj } from '../../App';

const addNewReservation = createAsyncThunk(
  'reservation/add',
  async (adventureID) => {
    const reservationData = {
      adventureID: adventureID,
      currentUserID: currentUserObj().id,
    };
    const response = await fetch('http://localhost:3000/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      console.log('The reservation is not created!');
    }

    const data = await response.json();
    return [...data.reservations];
  },
);

export default addNewReservation;

export const fetchUserReservations = createAsyncThunk(
  'fetch/reservations',
  async () => {
    const userData = {
      currentUserID: currentUserObj().id,
    };
    const response = await fetch(
      'http://localhost:3000/api/v1/fetch_reservations',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await response.json();
    return [...data.reservations];
  },
);

export const deleteReservation = createAsyncThunk(
  'delete/reservation',
  async (reservation_id) => {
    const reservationDetails = {
      reservation_id: reservation_id,
      currentUserID: currentUserObj().id,
    };

    const response = await fetch(
      'http://localhost:3000/api/v1/delete_reservation',
      {
        method: 'DELETE',
        body: JSON.stringify(reservationDetails),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      console.log('Something went wrong');
    }
    const data = await response.json();

    return [...data.reservations];
  },
);
