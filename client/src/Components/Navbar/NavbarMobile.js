import React, { Component } from 'react';
import NavbarSideMenu from './NavbarSideMenu';
import './Navbar.css';


class NavbarMobile extends Component {
    constructor(props) {
        super();
        this.handleHamburgerClicked = this.handleHamburgerClicked.bind(this);
        this.state = {
            hamburgerClicked: false,
            sideBarWidth: 0
        };
    }

    handleHamburgerClicked() {
        this.setState(state => ({
            hamburgerClicked: !state.hamburgerClicked,
            sideBarWidth: !state.hamburgerClicked ? 200 : 0
        }));
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="#">MelodyMaker</a>
                    <ul className="navbar-nav ml-auto">
                        <button className="btn btn-default" onClick={this.handleHamburgerClicked}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </button>
                    </ul>
                </nav>
                <NavbarSideMenu sideBarWidth={this.state.sideBarWidth} hamClicked={this.handleHamburgerClicked} />
            </div>
        );
    }
}

export default NavbarMobile;