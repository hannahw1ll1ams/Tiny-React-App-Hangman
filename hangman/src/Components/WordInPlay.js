import React from 'react';
import '../css/WordInPlay.css'


const WordInPlay = ({ lettersSoFar, wordToGuess }) => {

  return (
    <div className='WordInPlay'>
      {/* <p>Word to guess:{wordToGuess}</p> */}
      <ul className='wordInPlayLetters'>
        {wordToGuess.split('').map(letter => {
          return lettersSoFar.includes(letter) ?
            <p key={letter + Math.random()} className={letter}>{letter}</p> : <p key={letter + Math.random()}>_</p>
        })
        }
      </ul>
    </div>
  );
}

export default WordInPlay;