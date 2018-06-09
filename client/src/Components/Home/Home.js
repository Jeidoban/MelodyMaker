import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="backPhoto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <h1 id="beutText" className="text-center">Generate Beautiful Melodies</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;