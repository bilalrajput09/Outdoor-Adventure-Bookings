import React from 'react';
import './App.css';
import Search from './Components/Search';
import AdventureList from './Components/AdventureList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authenticateUser } from './redux/slice/userSlice';

export const checkCurrentUser = () => {
  if (localStorage.getItem('id') !== null) {
    return true;
  }
  return false;
};

export const currentUserObj = () => {
  if (localStorage.getItem('id') !== null) {
    const userObj = localStorage.getItem('id');

    return JSON.parse(userObj);
  }
  return false;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkCurrentUser()) {
      dispatch(authenticateUser(currentUserObj()));
    }
  }, [dispatch]);
  return (
    <>
      <Search />
      <div className="container">
        <AdventureList />
      </div>
    </>
  );
}

export default App;
