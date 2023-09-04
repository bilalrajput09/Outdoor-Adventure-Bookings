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
