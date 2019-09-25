
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
/*
import WordCard from './WordCard';

//const word = "Hello";
class App extends Component {
  render() {
    return (
      <div><WordCard value="HALIF" /></div>
      
    );
  }
}
*/
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
      
    );
  }
}
export default App;
