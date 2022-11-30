import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import 'animate.css';
import Shelf from '../src/component/Shelf';
import Gnb from '../src/component/Gnb';
import Project from './page/projectView';

function App() {
  const pj = [
    ["Jo Malone", '2019.09 - 2019.10'], 
    ["Chair Project", '2019.10 - 2019.12'], 
    ["Blue", "2020.05 - 2020.06"], 
    ["Wave Box", "2020.07 - 2020.08"], 
    ["Airbnb Redesign", "2020.09 - 2020.10"],
    ["Vehicle Voice Relationship", "2020.10 - 2020.11"],
    ["online Edu Tool", "2020.10 - 2020.12"],
    ["Scoop", "2020.09 - 2020.12"],
    ["MOIM", "2021.02 - 2021.04"],
    ["Little Dust", "2022.03 - 2022.06"],
    ["Personal Quiz", "2022.05 - 2022.06"]
  ];
  return (
    <BrowserRouter>
        <div className="App">
          <Gnb/>
          <Routes>
            <Route path='/portfolio' element={
              <div>
                <Shelf key={1} year='2021 -' projects={pj}/>
                {/* <Shelf key={2} year='2019 - 2020' projects={pj20}/> */}
              </div>
            } />
            <Route path='portfolio/project' element={<Project/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
