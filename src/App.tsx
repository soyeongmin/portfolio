import React from 'react';
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <div className='Gnb'>
        <p className='Home_text'>Soyeong Min</p>
        <div className='BtnGroup'>
          <button onClick={() => alert("I'm resume")}>resume</button>
          <button>contact</button>
        </div>
      </div>
      <div className='Square' onClick={()=> alert("I'm scoop!")}> Scoop</div>
    </div>
  );
}

export default App;
