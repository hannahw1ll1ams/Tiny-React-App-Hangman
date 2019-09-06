import React, { Component } from 'react';
import '../css/alphabetList.css'

class AlphabetList extends Component {
  state = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
  render() {
    const { alphabet } = this.state;
    return (
      <div className='alphabetContainer'>
        <ul className="alphabet">
          {alphabet.map(letter => {
            return <li>{letter}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default AlphabetList;