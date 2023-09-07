// SearchComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { setQuery, setResults } from '../redux/adventureActions';
import axios from 'axios';

function SearchComponent({ query, results, setQuery, setResults }) {
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSearchButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/adventures?q=${query}`);
      const adventureData = response.data;
      setResults(adventureData);
    } catch (error) {
      console.error('Error fetching adventure data:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for adventures"
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div>
        {results && results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results && results.map((adventure) => (
              <li key={adventure.id}>{adventure.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  query: state.query,
  results: state.results,
});

const mapDispatchToProps = {
  setQuery,
  setResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
