import React, { Component } from 'react';
import Navbar from './Navbar';
import Sequencer from './Sequencer';

class SiteContainer extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Sequencer/>
            </div>
        );
    }
}

export default SiteContainer;