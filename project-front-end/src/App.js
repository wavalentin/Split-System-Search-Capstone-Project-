import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Home from "./Home";
// import SnackOrBoozeApi from "./helpers/Api";
// import NavBar from "./components/NavBar";
// import { Route, Switch } from "react-router-dom";
// import Menu from "./FoodMenu";
// import Snack from "./FoodItem";
import Router from "./router";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [snacks, setSnacks] = useState([]);

  // useEffect(() => {
  //   async function getSnacks() {
  //     let snacks = await SnackOrBoozeApi.getSnacks();
  //     setSnacks(snacks);
  //     setIsLoading(false);
  //   }
  //   getSnacks();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
