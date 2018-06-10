import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Login/Signup';

class NavbarDesktop extends Component {
    constructor() {
        super();
        this.state = {
            signupClicked: false
        };
        this.loginSignupModal = this.loginSignupModal.bind(this);
        this.signupClicked = this.signupClicked.bind(this);
    }

    signupClicked() {
        this.setState(state => ({
            signupClicked: !state.signupClicked
        }));
    }

    loginSignupModal() {
        return (
            <div className="modal fade" id="loginSignupModal" tabindex="-1" role="dialog" aria-labelledby="loginSignupModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.signupClicked ? <Signup/> : <Login/> }
                        </div>
                        {this.state.signupClicked ? 
                        <a href="#" onClick={this.signupClicked}>No account? Sign up here!</a> :
                        <a href="#" onClick={this.signupClicked}>Already have an account? Login here!</a> 
                        }
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand navText">MelodyMaker</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Application</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn logInButton" data-toggle="modal" data-target="#loginSignupModal">Log in</button>
                        </li>
                    </ul>
                </nav>
                {this.loginSignupModal()}
            </div>
        );
    }
}

export default NavbarDesktop;