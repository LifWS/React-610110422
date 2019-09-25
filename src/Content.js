import React, { Component } from 'react';
import { DIM_COLOR } from 'jest-matcher-utils';

class Content extends Component {
    

    render() {
        return (
            <div className="App">
                <button className= "activeCard" onClick={this.printButton} >Start Games</button>
            </div>

        )
    }
}
export default Content;