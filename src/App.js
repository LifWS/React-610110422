import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value = "HALIF"/>
        }
      </div>
    );
  }
}

export default App;