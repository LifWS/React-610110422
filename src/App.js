import React, { Component } from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
import './App.css';

const word = ['ape', 'cat', 'eat', 'zip', 'wet', 'dry', 'poll', 'pot', 'run', 'fun', 'git', 'bad', 'Hello', 'Green', 'Black', 'Pearl', 'Dense', 'sharp', 'clone', 'clear', 'steel', 'stool', 'chair', 'never']
var item = word[Math.floor(Math.random() * word.length)]

class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value={item.toUpperCase()} />
        }
      </div>
    );
  }
}

export default App;