import React from 'react';
import '../css/WordInPlay.css'


const WordInPlay = ({ lettersSoFar, wordToGuess }) => {

  return (
    <div>
      <p>Word to guess:{wordToGuess}</p>
      <ul>
        {wordToGuess.split('').map(letter => {
          return lettersSoFar.includes(letter) ?
            <p key={letter + Math.random()} className={letter}>{letter}</p> : <p key={letter + Math.random()}>_</p>
        })
        }
      </ul>
      <p>WordToGuess Length: {wordToGuess.length}</p>
      <ul className="correct" >Correct Letters:
        {lettersSoFar.filter(letter => wordToGuess.includes(letter))}
      </ul>
    </div>
  );
}

export default WordInPlay;