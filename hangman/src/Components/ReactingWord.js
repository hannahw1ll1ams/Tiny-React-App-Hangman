import React, { Component } from 'react';

class ReactingWord extends Component {
  state = {
    wordToGuess: 'Cheese',
    guessedSoFar: ''
  }
  render() {
    const { letterGuessed } = this.props;
    const { wordToGuess } = this.state;
    return (
      <div>
        <p>{wordToGuess.length}</p>
        <p>{letterGuessed}</p>
      </div>
    );
  }
}

export default ReactingWord;