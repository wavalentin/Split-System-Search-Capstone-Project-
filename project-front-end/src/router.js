import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as Views from "./views";
import DefaultRedirect from "./helpers/defaultRedirect";
import { NavBar } from "./components";
import SnackOrBoozeApi from "./helpers/Api";

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);
  // const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch snacks data and update the state
      const equipmentsData = await SnackOrBoozeApi.getSnacks();
      setEquipments(equipmentsData);

      // const drinksData = await SnackOrBoozeApi.getDrinks();
      // setDrinks(drinksData);

      setIsLoading(false);
    }
    fetchData();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Views.HomeView />
      </Route>
      <Route exact path="/home">
        <Views.HomeView />
      </Route>
      <Route exact path="/equipments">
        <Views.ItemListView items={equipments} type="equipments" />
      </Route>
      <Route exact path="/equipments/search">
        <Views.ItemListView items={search} type="keyword" />
      </Route>
      <Route exact path="/*">
        {<DefaultRedirect />}
      </Route>
    </BrowserRouter>
  );
};


export default Router;
