import React, { Component } from 'react';
import './App.css';
export default class CharacterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.attempt != this.props.attempt) {
            this.setState({ active: false })
            //setTimeout(() => this.setState({ active: false }), 500)
        }
    }

    activate = () => {
        if (!this.state.active) {
            this.props.activationHandler(this.props.value)
            this.setState({ active: true })
            console.log(this.props.value)
        }

    }
/*
    getAnswer = () => {
        this.props.getAnswer(this.state.chars.join('').toString());
    }
*/
    render() {
        let className = `card ${this.state.active ? 'activeCard' : ''}`
        /*
        if (this.props.isSurrenderConfirm) {
            className = 'card activeCard'
            document.getElementsByClassName("card").disabled = true;
        }
        */
        return (
            <div className={className} onClick={this.activate} >
                {this.props.value}
            </div>
        );
    }
}