import React from 'react';
import '../css/lives.css'


const Lives = ({ wordToGuess, lettersSoFar, livesLeft }) => {
  return (
    <div className='Lives'>
      <p>{livesLeft === 0 && "YOU LOST"}</p>


      <ul className="incorrect" > Incorrect Letters:
        {lettersSoFar.filter(letter => (wordToGuess.includes(letter) === false)
      )}
      </ul>
      <ul className="correct" >Correct Letters:
        {lettersSoFar.filter(letter => wordToGuess.includes(letter))}
      </ul>
      <p>Lives Left: {livesLeft}</p>
    </div>
  );
};

export default Lives;
