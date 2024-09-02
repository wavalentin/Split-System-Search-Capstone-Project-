import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search descriptions"
      />
      <button onClick="splitSystemSearch()">Search</button>
      {equipments.length > 0 && (
        <ul>
          {equipments.map((result) => (
            <li
              key={result.id}
              onClick={() => setSelectedResult(result)}
              style={{ cursor: 'pointer' }}
            >
              {result.description}
            </li>
          ))}
        </ul>
      )}
      {selectedResult && (
        <div>
          <h2>Details</h2>
          <p>{selectedResult.description}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
