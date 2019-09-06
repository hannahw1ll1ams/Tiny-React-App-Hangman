import React, { Component } from 'react';
import '../css/alphabetList.css'

class AlphabetList extends Component {
  state = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
  handleClick = (event) => {
    this.props.fetchLetterClicked(event.target.name)
  }
  render() {
    const { alphabet } = this.state;
    const { lettersSoFar } = this.props;
    return (
      <div className='alphabetContainer'>
        <ul className="alphabet">
          {alphabet.map(letter => {
            return <button disabled={lettersSoFar.includes(letter)} name={letter} key={letter} onClick={this.handleClick}>{letter}</button>
          })}
        </ul>
      </div>
    );
  }
}

export default AlphabetList;