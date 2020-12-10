import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import './style/header.css'

class Header extends Component{

    constructor(props) {
        super(props)
        this.state = {
          isNavOpen: false,
        }

    this.toggleNav = this.toggleNav.bind(this);
    }

    
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

    render(){
        return(
            <>
            <Navbar dark expand="md cor">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="ml-auto" href="/home">
                            <img src="https://raw.githubusercontent.com/HITK-TECH-Community/Community-Website/main/assets/HITK_tech_comm_logo.png" height="40" width="40"
                                alt="LOGO" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link " to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> News
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto mt-auto" navbar>
                                <NavItem>
                                <NavLink className="btn" to="/login">
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </NavLink>
                                </NavItem>

                                <NavItem>
                                <NavLink
                                    className="btn"
                                    to="/register"
                                >
                                    <span className="fa fa-sign-in fa-lg"></span>Register
                                </NavLink>
                                </NavItem>
                    
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            
                <Jumbotron>
            <div className="container">
                 <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>
                        HITK Tech Community 👩🏻‍💻👨🏻‍💻
                        </h1>
                        <p> We are a group of HITK students trying to fill the knowledge gap and help you find your place of discovery by sharing you the opportunities and resources at the right time!⏱️</p>
                    </div>
                    <div className="col-12 col-sm-6">
                    <img src="/HITK_tech_comm_logo.png" height="250px" width="250px" alt="LOGO in correct size" />
                         
                    </div>
                 </div>
            </div>
        </Jumbotron>

            </>
        );
    }
}

export default Header;