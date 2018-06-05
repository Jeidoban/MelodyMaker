import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Sequencer from './MainApp/Sequencer/Sequencer';

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