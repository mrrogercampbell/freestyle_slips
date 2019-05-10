import React from 'react';
import logo from '../../logo.svg';
import './App.css';

import FlashCard from '../FlashCard/FlashCard'

import '../FlashCard/FlashCard.css'

import seg from '../../Data/Hl7SegList'


function App() {
  return (
    <div className="App">
      <header>
      </header>

      <div>
        <FlashCard />
      </div>
    </div>
  );
}

export default App;
