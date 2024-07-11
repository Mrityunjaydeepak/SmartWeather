import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Weather from "./components/Weather/Weather";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="h-screen bg-backg">
      <Router>
        {/* <Navbar /> */}
        {/* <Weather /> */}
        <Forecast />
      </Router>
    </div>
  );
}

export default App;
