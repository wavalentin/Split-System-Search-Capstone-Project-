import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import * as Views from "./views";
// import DefaultRedirect from "./helpers/defaultRedirect";
// import { NavBar } from "./components";
import split_systems_db from "http://localhost:5000";

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch snacks data and update the state
      const snacksData = await split_systems_db.getSnacks();
      setSnacks(snacksData);

      const drinksData = await split_systems_db.getDrinks();
      setDrinks(drinksData);

      setIsLoading(false);
    }
    fetchData();
  }, []);
}
//   const addItem = async (formData) => {
//     try {
//       // Add the new item to the database and get the response
//       const newItem = await split_systems_db.addNewItem(formData);

//       // Update the state based on the type of the new item
//       if (newItem.type === "snacks") {
//         setSnacks([...snacks, newItem]); // Add the new snack to the snacks state
//       } else if (newItem.type === "drinks") {
//         setDrinks([...drinks, newItem]); // Add the new drink to the drinks state
//       }

//       alert("Item added successfully:");
//     } catch (error) {
//       alert("Error adding new item:");
//       console.log("Error adding new item:", error);
//     }
//   };

//   if (isLoading) {
//     return <p>Loading &hellip;</p>;
//   }

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Route exact path="/">
//         <Views.HomeView />
//       </Route>
//       <Route exact path="/home">
//         <Views.HomeView />
//       </Route>
//       <Route exact path="/snacks">
//         <Views.ItemListView items={snacks} type="snacks" />
//       </Route>
//       <Route exact path="/drinks">
//         <Views.ItemListView items={drinks} type="drinks" />
//       </Route>
//       <Route exact path="/snacks/:id">
//         <Views.ItemView items={snacks} />
//       </Route>
//       <Route exact path="/drinks/:id">
//         <Views.ItemView items={drinks} />
//       </Route>
//       <Route exact path="/add-item">
//         <Views.AddItemFormView addItem={addItem} />
//       </Route>
//       <Route exact path="/*">
//         {<DefaultRedirect />}
//       </Route>
//     </BrowserRouter>
//   );
// };


export default Router;
