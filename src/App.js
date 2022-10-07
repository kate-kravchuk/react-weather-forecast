import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      Weather Forecast
      <footer>
        This application is created by Kateryna Kravchuk with the guidance of
        Matt Delac. It is
        <a
          href="https://github.com/kate-kravchuk/react-weather-forecast"
          target="_blank"
        >
          {" "}
          open sourced on GitHub
        </a>{" "}
        and
        <a
          href="https://aesthetic-stroopwafel-a4cb5d.netlify.app/"
          target="_blank"
        >
          {" "}
          deployed on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
