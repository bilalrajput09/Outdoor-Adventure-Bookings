// SearchComponent.js
import React from 'react';

function SearchComponent({ myInputRef, searchAdventures }) {
  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Search for adventures"
          className="form-control"
          ref={myInputRef}
        />
        <button
          className="btn btn-primary mt-3"
          onClick={searchAdventures}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
