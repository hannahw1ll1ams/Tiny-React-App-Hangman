import React from 'react';
import '../css/lives.css'


const Lives = ({ wordToGuess, lettersSoFar, livesLeft }) => {

  return (
    <div>
      <ul className="incorrect" > Incorrect Letters:
        {lettersSoFar.filter(letter => (wordToGuess.includes(letter) === false)
        && livesLeft--
      )}
      </ul>
      <p>Lives Left: {livesLeft}</p>
    </div>
  );
};

export default Lives;
