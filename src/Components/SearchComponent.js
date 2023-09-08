// SearchComponent.js
import React from 'react';
import { FcSearch } from 'react-icons/fc';

function SearchComponent({ myInputRef, searchAdventures }) {
  return (
    <div className="row p-2">
      <div className="input-group mt-2">
        <input
          type="text"
          placeholder="Search for adventures"
          className="form-control"
          ref={myInputRef}
        />
        <button
          className="btn
          btn-outline-primary"
          type="button"
          onClick={searchAdventures}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FcSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
