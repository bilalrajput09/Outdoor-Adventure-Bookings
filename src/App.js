import React from 'react';
import './App.css';
import AdventureList from './Components/AdventureList';

function App() {
  return (
    <>
      <div className="container">
        <AdventureList />
      </div>
    </>
  );
}

export default App;

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
