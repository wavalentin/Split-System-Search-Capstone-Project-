import React from "react";
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
