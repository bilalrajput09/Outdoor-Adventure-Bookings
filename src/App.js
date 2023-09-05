import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import AdventureList from './Components/AdventureList';

function App() {
  return (
    <>
      <NavBar />
      <Search />
      <div className="container">
        <AdventureList />
      </div>
    </>
  );
}

export default App;
