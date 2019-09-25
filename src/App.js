import React, { Component } from 'react';
import WordCard from './WordCard';
import Header from './Header'
import CharacterCard from './CharacterCard';
import './App.css';

const word = ['ape', 'cat', 'eat', 'zip', 'wet', 'dry', 'poll', 'pot', 'run', 'fun', 'git', 'bad', 'Hello', 'Green', 'Black', 'Pearl', 'Dense', 'sharp', 'clone', 'clear', 'steel', 'stool', 'chair', 'never']
var item = word[Math.floor(Math.random() * word.length)]

class App extends Component {
  newgame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          <WordCard value={item.toUpperCase()} />
        }
        <button id="newgame" onClick={this.newgame}>NEW GAME</button>
      </div>
    );
  }
  
  

}

export default App;