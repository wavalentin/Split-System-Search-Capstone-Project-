import React, { useEffect, useState } from "react";
import axios from 'axios';
import SplitSystemApi from "../helpers/Api";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {Button} from "reactstrap";

const Search = () => {
  const [query, setQuery ] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');
  const link = `/search?keyword=${query}`;

  useEffect(() => {
      async function fetchData() {
        // Fetch equipments data and update the state
          const equipmentsData = await SplitSystemApi.searchEquipment(keyword);
          setItems(equipmentsData);

          setIsLoading(false);
      }
      fetchData();
  }, []);

  if (isLoading) {
      return <p>Loading &hellip;</p>;
  }

  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search descriptions"
      />
      <Link to={link}>
        <Button color="success">Search</Button>
      </Link>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li
              key={item.modelnumber}
            >
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
