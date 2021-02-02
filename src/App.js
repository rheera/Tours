import React, { useEffect, useState } from "react";
import "./App.css";
// import { Tours } from "./Tours";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <>
        <main>
          <div className={"loading is-large center($size)"}>
            <h1>Loading...</h1>
            <div className={"loader"}></div>
          </div>
        </main>
      </>
    );
  }
  return (
    <main className={"container"}>
      <header>
        <h1 className={"title"}>
          Our Tours{" "}
          <progress className="progress is-info" max="100" value={"100"}>
            15%
          </progress>
        </h1>
      </header>
      <div className={"tours"}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </main>
  );
}

export default App;
