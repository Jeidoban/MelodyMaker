import React, { Component } from 'react';

class NavbarDesktop extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="#">MelodyMaker</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Application</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-primary">Log in</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavbarDesktop;