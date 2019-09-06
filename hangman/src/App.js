import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import AlphabetList from './Components/AlphabetList'
import GameDescription from './Components/GameDescription'
import WordInPlay from './Components/WordInPlay'
import Lives from './Components/Lives'


class App extends Component {
  state = {
    wordToGuess: "Cheese",
    lettersSoFar: []
  }

  fetchLetterClicked = (letter) => {
    const { lettersSoFar } = this.state
    this.setState({ lettersSoFar: [...lettersSoFar, letter] })
  }

  render() {
    const { wordToGuess, lettersSoFar } = this.state
    return (
      <div className="App" >
        <Header />
        <GameDescription />
        <p>Letters guessed so far:</p>
        <ul>
          {lettersSoFar.map(letter => {
            return (<li key={letter}>{letter}</li>)
          })}
        </ul>
        <p>Word to guess:{wordToGuess}</p>
        <Lives />
        <WordInPlay wordToGuess={wordToGuess} lettersSoFar={lettersSoFar} />
        <AlphabetList fetchLetterClicked={this.fetchLetterClicked} lettersSoFar={lettersSoFar} />
      </div>
    );
  }
}

export default App;
