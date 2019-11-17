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
    selectableWords: ["cheese", "donut", "pizzaexpress", "croquettes"],
    lettersSoFar: [],
    livesLeft: 10,
    currentWordIndex: 0
  }

  fetchLetterClicked = (letter) => {
    const { lettersSoFar, selectableWords, currentWordIndex } = this.state;
    let livesDifference = 0;
    (selectableWords[currentWordIndex].includes(letter) === false) ? livesDifference = -1 : livesDifference = 0
    this.setState(currentState => {
      return { livesLeft: currentState.livesLeft + livesDifference, lettersSoFar: [...lettersSoFar, letter] }
    })
  }

  toStartAgain = () => {
    console.log('RESETTING')
    const { selectableWords } = this.state;
    let currentWordIndex = Math.floor(Math.random() * (selectableWords.length))
    this.setState({ lettersSoFar: [], livesLeft: 10, currentWordIndex })
  }

  render() {
    const { selectableWords, currentWordIndex, lettersSoFar, livesLeft } = this.state
    return (
      <div className="App" >
        <Header />
        <GameDescription />
        <Lives wordToGuess={selectableWords[currentWordIndex]} lettersSoFar={lettersSoFar} livesLeft={livesLeft} updateLivesLeft={this.updateLivesLeft} />
        <WordInPlay wordToGuess={selectableWords[currentWordIndex]} lettersSoFar={lettersSoFar} />
        <AlphabetList fetchLetterClicked={this.fetchLetterClicked} lettersSoFar={lettersSoFar} livesLeft={livesLeft} />
        <ResetGame toStartAgain={this.toStartAgain} />
      </div>
    );
  }
}

export default App;
