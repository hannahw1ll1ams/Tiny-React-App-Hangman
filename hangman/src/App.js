import React from 'react';
import './App.css';
import Header from './Components/Header'
import AlphabetList from './Components/AlphabetList'
import GameDescription from './Components/GameDescription'

function App() {
  return (
    <div className="App">
      <Header />
      <GameDescription />
      <AlphabetList />
    </div>
  );
}

export default App;
