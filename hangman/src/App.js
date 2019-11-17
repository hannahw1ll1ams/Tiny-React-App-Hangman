import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import AlphabetList from './Components/AlphabetList'
import GameDescription from './Components/GameDescription'
import WordInPlay from './Components/WordInPlay'
import Lives from './Components/Lives'
import ResetGame from './Components/ResetGame';


class App extends Component {
  state = {
    selectableWords: ["cheese", "donut", "pizzaexpress", "croquette"],
    lettersSoFar: [],
    livesLeft: 10,
    currentWordIndex: 0
  }

  fetchLetterClicked = (letter) => {
    const { lettersSoFar } = this.state
    this.setState({ lettersSoFar: [...lettersSoFar, letter] })
  }

  toStartAgain = () => {
    console.log('RESETTING')
    const { selectableWords } = this.state;
    let currentWordIndex = Math.floor(Math.random() * (selectableWords.length))
    this.setState({ lettersSoFar: [], livesLeft: 10, currentWordIndex }, () => {
      console.log(this.state)
    })
  }

  render() {
    const { selectableWords, currentWordIndex, lettersSoFar, livesLeft } = this.state
    return (
      <div className="App" >
        <Header />
        <GameDescription />
        <h2>Lives COMPONENT</h2>
        <Lives wordToGuess={selectableWords[currentWordIndex]} lettersSoFar={lettersSoFar} livesLeft={livesLeft} />
        <h2>WordInPlay COMPONENT</h2>
        <WordInPlay wordToGuess={selectableWords[currentWordIndex]} lettersSoFar={lettersSoFar} />
        <h2>AlphabetList COMPONENT</h2>
        <AlphabetList fetchLetterClicked={this.fetchLetterClicked} lettersSoFar={lettersSoFar} />
        <ResetGame toStartAgain={this.toStartAgain} />
      </div>
    );
  }
}

export default App;
