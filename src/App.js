import React, { Component } from 'react';
import WordCard from './WordCard';
import Header from './Header'
import Serrender from './Surrender'
import CharacterCard from './CharacterCard';
import './App.css';


const word = ['ape', 'cat', 'eat', 'zip', 'wet', 'dry', 'poll', 'pot', 'run', 'fun', 'git', 'bad', 'Hello', 'Green', 'Black', 'Pearl', 'Dense', 'sharp', 'clone', 'clear', 'steel', 'stool', 'chair', 'never']
var item = word[Math.floor(Math.random() * word.length)]

class App extends Component {
  constructor() {
    super()
    this.state = {
      isSurrenderConfirm: false
    };
  }
  
  newgame = () => {
    window.location.reload(false);
  }
  /*
  getAnswer = (isSurrender) => {
    
  }

  getSurrender = (isSurrender) =>{
    if(isSurrender){
      this.setState({isSurrenderConfirm:true});
    }
  }
*/
  render() {
    return (
      <div className="App">
        <Header />
        {
          <WordCard value={item.toUpperCase()} isSurrenderConfirm={this.state.isSurrenderConfirm} getAnswer={this.getAnswer}/>
        }
        <h2 id="input"></h2>
        <h2 id="result"></h2>
        <h2 id="Ans"></h2>
        <button id="newgame" class = "button" onClick={this.newgame}>NEW GAME</button>
      </div>

    );
  }



}

export default App;