
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DefaultRedirect from "./helpers/defaultRedirect";
import SplitSystemApi from "./helpers/Api";

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch equipments data and update the state
      const equipmentsData = await SplitSystemApi.getequipments();
      setEquipments(equipmentsData);

    //   const drinksData = await SplitSystemApi.getDrinks();
    //   setDrinks(drinksData);

      setIsLoading(false);
    }
    fetchData();
  }, []);

 
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <BrowserRouter>
      <Route exact path="/">
      </Route>
      <Route exact path="/home">
      </Route>
      <Route exact path="http://localhost:5000/equipments">
        <Views.ItemListView items={equipments} type="equipments" />
      </Route>
      <Route exact path="http://localhost:5000/equipments/search?keyword=">
        <Views.ItemListView items={search} type="keyword" />
      </Route>
      <Route exact path="/*">
        {<DefaultRedirect />}
      </Route>
    </BrowserRouter>
  );
};


export default Router;
