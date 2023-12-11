import React from "react";
import MainContent from "./components/MainContent";

function App() {
  localStorage.setItem('onsite', new Date().toISOString())
  return (
    <div>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
