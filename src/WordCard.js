import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';

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

    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = [...this.state.guess, c]
        this.setState({ guess })
        document.getElementById('input').innerHTML = `${guess.join('').toString()}`
        if (guess.length == this.state.chars.length) {
            console.log(`${this.state.guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            if (guess.join('').toString() == this.state.chars.join('').toString()) {
                this.setState({ guess: [], completed: true })
                document.getElementById('result').innerHTML = `Congratulations! You win`
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
                document.getElementById('result').innerHTML = `Attempt: ${this.state.attempt} `
            }
        }
    }
            render() {
                console.log(`${this.state.guess.join('').toString()} ${this.state.chars.join('').toString()}`)
                if (this.props.isSurrenderConfirm) {
                    this.props.getAnswer(this.state.chars.join(''))
                }
                return (
                    <div>
                        {Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} isSurrenderConfirm={this.props.isSurrenderConfirm} {...this.state} />)}
                    </div>
                );
            }

        }