// SearchComponent.js
import React from 'react';
import { FcSearch } from 'react-icons/fc';

function SearchComponent({ myInputRef, searchAdventures }) {
  return (
    <div className="row p-2">
      <div class="input-group mt-2">
        <input
          type="text"
          placeholder="Search for adventures"
          className="form-control"
          ref={myInputRef}
        ></input>
        <span
          className="btn btn-outline-primary"
          onClick={searchAdventures}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FcSearch />
        </span>
      </div>
    </div>
  );
}

export default SearchComponent;
