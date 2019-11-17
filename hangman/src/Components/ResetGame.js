import React from 'react';

const ResetGame = ({ toStartAgain }) => {
  const handleClick = () => {
    toStartAgain()
  }
  return (
    <button onClick={handleClick}> Start Again </button>
  );
};

export default ResetGame;