import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import fetchAdventuresData from "../redux/adventureActions";
import Adventure from "./Adventure";

const AdventureList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adventures = useSelector((state) => state.adventures.adventures);

  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Fetch adventure data from the server on component mount
  const user = localStorage.getItem("id");
  useEffect(() => {
    dispatch(fetchAdventuresData());
    if (!isAuthenticated && user === null) {
      navigate("/login");
    } else if (user) {
      navigate("/");
    }
  }, [dispatch, navigate, isAuthenticated, user]);

  // handle adding adventure categories
  function handleAddAdventureButtonClick() {}

  return (
    <>
      <div className="text-center mt-4">
        <h1 className="text-center mt-2">Latest Adventures</h1>
        <br />
        <button
          className="btn btn-lg btn-primary"
          style={{
            backgroundColor: "#97bf0f",
            color: "#fff",
            fontWeight: '400',
            borderColor: "#97bf0f",
            fontSize: "2rem",
          }}
          onClick={handleAddAdventureButtonClick}
        >
          Add Yours'
        </button>
        <p className="font-weight-bold fs-3 mt-4 ">
          Here, you also get to design your own{" "}
          <span
            style={{
              color: "#d35504",
              fontSize: "2.25rem",
            }}
          >
            {" "}
            adventures!!
          </span>
        </p>
      </div>

      {adventures.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          {adventures.map((adventure) => (
            <Link
              to={"/adventures/" + adventure.id}
              key={adventure.id}
              className="btn"
            >
              <Adventure
                name={adventure.name}
                picture={adventure.picture}
                description={adventure.description}
              />
            </Link>
          ))}
        </div>
      )}
      {/* Display a message if there are no adventures */}
      {adventures.length === 0 && <h3>There are no adventures!</h3>}
    </>
  );
};

export default AdventureList;
