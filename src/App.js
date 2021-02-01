import React from "react";
import "./App.css";
import { Tours } from "./Tours";
import Tour from "./Tour";

function App() {
  return (
    <>
      <header className="App">
        <h1>Our Tours</h1>
      </header>
      {Tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </>
  );
}

export default App;
