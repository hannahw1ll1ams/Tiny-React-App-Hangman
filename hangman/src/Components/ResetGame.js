import React from 'react';

const ResetGame = ({ toStartAgain }) => {
  const handleClick = () => {
    toStartAgain()
  }
  return (
    <button onClick={handleClick} className='ResetButton'> Start Again </button>
  );
};

export default ResetGame;