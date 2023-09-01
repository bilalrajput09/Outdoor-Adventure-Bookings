import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import AdventureList from './Components/AdventureList';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <AdventureList />
      </div>
    </>
  );
}

export default App;
