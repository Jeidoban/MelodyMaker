import React, { Component } from 'react';
import './Sequencer.css';
import ApplicationData from "../../../Models/ApplicationData";

class Sequencer extends Component {
    constructor() {
        super();
        this.state = { isTrue: false };
        this.createSequencer = this.createSequencer.bind(this);
    }

    createSequencer() {
        this.setState(state => ({
            isTrue: !state.isTrue
        }));
    }  

    testButton() {
        let isTrue = this.state.isTrue;
        if (!isTrue) {
            return (
                <h1>thing is false</h1>
            )
        } else {
            return (
                <h1>thing is true</h1>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="container topPadding">
                    <div className="jumbotron">
                        <div className="row rowMargin">
                            <div className="sequencerButton" onClick={this.createSequencer}></div>
                            {this.testButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sequencer;