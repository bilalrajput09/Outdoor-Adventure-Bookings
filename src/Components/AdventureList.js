import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchAdventuresData from "../redux/adventureActions";
import Adventure from "./Adventure";

const AdventureList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adventures = useSelector((state) => state.adventures.adventures);

  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Fetch adventure data from the server on component mount
  useEffect(() => {
    dispatch(fetchAdventuresData());
  }, [dispatch]);

  // Redirect to the login page if the user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="text-center mb-5">Latest Adventures</h1>
      {adventures.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {adventures.map((adventure) => (
            <Adventure
              key={adventure.id}
              name={adventure.name}
              picture={adventure.picture}
              description={adventure.description}
            />
          ))}
        </div>
      )}
      {/* Display a message if there are no adventures */}
      {adventures.length === 0 && <h3>There are no adventures!</h3>}
    </>
  );
};

export default AdventureList;
