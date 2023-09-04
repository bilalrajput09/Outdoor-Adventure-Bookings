import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import AdventureList from "./Components/AdventureList";
import Reservations from "./Components/Reservations";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Layout from "./Components/Layout";
import "./App.css";

function App() {
  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        {isAuthenticated ? (
          <Route element={<Layout />}>
            <Route path="/" element={<AdventureList />} />
            <Route path="/adventures" element={<AdventureList />} />
            <Route path="/reservations" element={<Reservations />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<LoginForm />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
