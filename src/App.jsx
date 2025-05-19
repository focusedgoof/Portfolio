import React from "react";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Aside />
      <MainContent />
    </div>
  );
}

export default App;