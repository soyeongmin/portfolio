import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "animate.css";
import Shelf from "../src/component/Shelf";
import Gnb from "../src/component/Gnb";
import ProjectView from "./page/projectView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Gnb />
        <Routes>
          <Route path="/portfolio" element={<Shelf />} />
          <Route path="portfolio/project/:id" element={<ProjectView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
