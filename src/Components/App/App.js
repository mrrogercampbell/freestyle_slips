import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import seg from '../../Data/Hl7SegList'
function App() {
  console.log(seg[0].code)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h1>{seg[0].code}</h1>
        <h1>{seg[0].name}</h1>
      </div>
    </div>
  );
}

export default App;
