import React from 'react';
import logo from '../../logo.svg';
import './App.css';

import FlashCard from '../FlashCard/FlashCard'
import CardTurners from '../CardTurners/CardTurners'
import BackNextBtn from '../BackNextBtn/BackNextBtn'

import Seg from '../../Data/Hl7SegList'


function App() {
  return (
    <div className="App">
      <header>
      </header>

      <div>
        <FlashCard />
        {/* <CardTurners /> */}
        <BackNextBtn />

      </div>
    </div>
  );
}

export default App;
