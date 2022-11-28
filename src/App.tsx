import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import 'animate.css';
import Shelf from '../src/component/Shelf';
import Project from './page/projectView';

function App() {
  const pj21 = ["Scoop", "Little Dust", "MOIM", "Personal Quiz"];
  const pj20 = ["Jo Malone", "Wave Box", "Airbnb redesign", "online edu tool"];
  return (
    <BrowserRouter>
        <div className="App">
          <div className='Gnb'>
            <p className='Home_text'>Soyeong Min</p>
            <div className='BtnGroup'>
              <button onClick={() => alert("I'm resume")}>resume</button>
              <button>contact</button>
            </div>
          </div>
          <Routes>
            <Route path='/portfolio' element={
              <div>
                <Shelf key={1} year='2021 -' projects={pj21}/>
                <Shelf key={2} year='2019 - 2020' projects={pj20}/>
              </div>
            } />
            <Route path='portfolio/project' element={<Project/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
