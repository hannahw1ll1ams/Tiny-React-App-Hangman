import React from 'react';

const WordInPlay = ({ letterGuessed, wordToGuess }) => {

  //if word to guess contains the letter guessed, then display that letter on the page.

  return (
    <div>
      <p>WordToGuess Length: {wordToGuess.length}</p>
    </div>
  );
}

export default WordInPlay;