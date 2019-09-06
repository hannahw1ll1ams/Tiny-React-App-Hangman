import React, { Component } from 'react';
import '../css/alphabetList.css'
import ReactingWord from '../Components/ReactingWord'

class AlphabetList extends Component {
  state = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    letterGuessed: null
  }

  handleClick = (event) => {
    console.log(event.target.name)
    this.setState({ letterGuessed: event.target.name })
  }
  render() {
    const { alphabet } = this.state;
    return (
      <div className='alphabetContainer'>
        <ReactingWord letterGuessed={this.state.letterGuessed} />
        <ul className="alphabet">
          {alphabet.map(letter => {
            return <button name={letter} key={letter} onClick={this.handleClick}>{letter}</button>
          })}
        </ul>
      </div>
    );
  }
}

export default AlphabetList;