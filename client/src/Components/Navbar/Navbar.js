import React, { Component } from 'react';
import Home from '../Home/Home';
import './Navbar.css';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isDesktop: false
        }

        this.navbarSelector = this.navbarSelector.bind(this);
    }

    componentDidMount() {
        this.navbarSelector();
        window.addEventListener("resize", this.navbarSelector);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.navbarSelector);
      }
    
      navbarSelector() {
        this.setState({isDesktop: window.innerWidth > 768})
      }

    render() {
        return (
            <div>
                {this.state.isDesktop ? <NavbarDesktop/> : <NavbarMobile/>}
                <Home />
            </div>
        );
    }
}

export default Navbar;