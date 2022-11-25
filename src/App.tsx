import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Gnb'>
        <p className='Home_text'>Soyeong Min</p>
        <div className='BtnGroup'>
          <button className='Btn_text'>resume</button>
          <button className='Btn_text'>contact</button>
        </div>
      </div>
    </div>
  );
}

export default App;
