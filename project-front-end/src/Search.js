import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [equipments, setEquipments] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const splitSystemSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/equipments/search?keyword=${query}`, {
        params: { q: query },
      });
      setEquipments(response.data);
    } catch (error) {
      console.error('Error fetching search equipment:', error);
    }
  };

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

export default SearchComponent;
