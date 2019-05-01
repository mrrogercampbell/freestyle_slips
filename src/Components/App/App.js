import React from 'react';
import logo from '../../logo.svg';
import './App.css';

import FlashCard from '../FlashCard/FlashCard'

import '../FlashCard/FlashCard.css'

import seg from '../../Data/Hl7SegList'


function App() {
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
        <FlashCard />
      </div>
    </div>
  );
}

export default App;
