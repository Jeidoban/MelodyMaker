import React, { Component } from 'react';

class NavbarSideMenu extends Component {
    constructor(props) {
        super();

    }

    render() {
        return (
            <div className="sideMenu" style={{width: this.props.sideBarWidth}}>
                <button className="closeButton" onClick={this.props.hamClicked}>X</button>
                <nav className="nav flex-column">
                    <a className="nav-link sideText" >Home</a>
                    <a className="nav-link sideText" >Application</a>
                    <a className="nav-link sideText" >Log in</a>
                </nav>
            </div>
        );
    }
}

export default NavbarSideMenu;