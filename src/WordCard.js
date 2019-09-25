import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    render() {
        if(this.props.isSurrenderConfirm){
            this.props.getAnswer(this.state.chars.join(''))
        }
        return (
            <div>
                {Array.from(this.props.value).map( (c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} isSurrenderConfirm={this.props.isSurrenderConfirm} {...this.state}/>)}
            </div>
        );
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({ guess })
        if (guess.length == this.state.chars.length) {
            if (guess.join('').toString() == this.state.join('').toString()) {
                this.setState({ guess: [], completed: true })
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
            }
        }
    }
}