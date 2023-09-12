import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  resetCreationError,
  getAllAdventures,
} from '../redux/slice/adventureSlice';
import fetchAdventuresData from '../redux/adventureActions';

import Adventure from './Adventure';
import checkCurrentUser from '../redux/actions/userActions';
import SearchComponent from './SearchComponent';
import ModelSearchedAdventures from './ModelSearchedAdventures';

const AdventureList = () => {
  const dispatch = useDispatch();
  const [adventures, setAdventures] = useState([]);
  const navigate = useNavigate();

  // get list of adventures from api
  useEffect(() => {
    fetch('https://outdoor-adventures.onrender.com/api/v1/adventures')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setAdventures(data);
      })
      .catch((error) => error);
  }, []);
  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // reset adventure creation states on mount
  useEffect(() => {
    dispatch(resetCreationError());
    dispatch(getAllAdventures());
  }, [dispatch]);
  // Fetch adventure data from the server on component mount
  const user = localStorage.getItem('id');
  useEffect(() => {
    dispatch(fetchAdventuresData());
  }, [dispatch, navigate, isAuthenticated, user]);

  // handle adding adventure categories
  function handleAddAdventureButtonClick() {
    navigate('/addAdventure');
  }

  const myInputRef = useRef();
  function capitalWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const [searchedAdventures, setSearchedAdventures] = useState([]);
  const searchAdventures = () => {
    const sAD = adventures.filter((a) => a.name.startsWith(capitalWord(myInputRef.current.value)));
    if (sAD !== null) {
      setSearchedAdventures(sAD);
    }
    return [];
  };

  return (
    <>
      <SearchComponent
        myInputRef={myInputRef}
        searchAdventures={searchAdventures}
      />
      <ModelSearchedAdventures searchedAdventures={searchedAdventures} />
      <div className="text-center mt-4">
        <h1 className="text-center mt-2">Latest Adventures</h1>
        <br />
        {checkCurrentUser() ? (
          <button
            className="btn btn-lg btn-primary"
            type="button"
            style={{
              backgroundColor: '#97bf0f',
              color: '#fff',
              fontWeight: '400',
              borderColor: '#97bf0f',
              fontSize: '1.9rem',
            }}
            onClick={handleAddAdventureButtonClick}
          >
            New Adventure!
          </button>
        ) : (
          <>
            <Link
              to="/signup"
              className="btn"
              style={{
                backgroundColor: '#97bf0f',
                color: '#fff',
                fontWeight: '400',
                borderColor: '#97bf0f',
                fontSize: '1.9rem',
              }}
            >
              Signup!
            </Link>
            <p className="mt-3">
              Already have an account?
              {' '}
              <Link to="/login">Login</Link>
              .
            </p>
          </>
        )}

        <p className="font-weight-bold fs-3 mt-4 ">
          Here, you also get to design your own
          {' '}
          <span
            style={{
              color: '#d35504',
              fontSize: '2.25rem',
            }}
          >
            {' '}
            adventures!!
          </span>
        </p>
      </div>
      {/* {adventures.length} */}
      {adventures.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          {adventures.map((adventure) => (
            <Link
              to={`/adventures/${adventure.id}`}
              key={adventure.id}
              className="btn"
            >
              <Adventure
                name={adventure.name}
                key={adventure.id}
                picture={adventure.picture}
                description={adventure.description}
                adventureId={adventure.id}
              />
            </Link>
          ))}
        </div>
      )}
      {/* Display a message if there are no adventures */}
      {adventures.length === 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <div className="col">
            <div className="card h-100">
              <img src="/sad.png" className="card-img-top" alt="Adventure" />
              <div className="card-body">
                <h5 className="card-title">No Adventures</h5>
                <p className="card-text">
                  You need to create some adventrues now!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdventureList;
