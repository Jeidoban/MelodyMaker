import React, { Component } from 'react';
import './Sequencer.css';

class Sequencer extends Component {
    render() {
        return (
            <div>
                <div className="container topPadding">
                    <div className="jumbotron">
                        <div className="row rowMargin">
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                            <div className="sequencerButton"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sequencer;