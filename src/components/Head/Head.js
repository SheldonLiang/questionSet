import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';

const head = (props) => {
    let header =
        (!props.loggedIn &&
            <Nav navbar>
                <NavItem><NavLink
                    to="/login"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                        textDecoration: 'underline'
                    }}>Login</NavLink></NavItem>
                <NavItem><NavLink to='/logon'>Logon</NavLink></NavItem>
            </Nav>)
        || (props.loggedIn &&
            <Nav navbar>
                <NavItem><NavLink to='/home'>Home</NavLink></NavItem>
                <NavItem><NavLink to={'/questions/' + props.tech}>Questions</NavLink></NavItem>
                <NavItem><NavLink to='/Logout'>LogOut</NavLink></NavItem>
            </Nav>);

    return (
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Enter</NavbarBrand>
            <NavbarToggler onClick={props.clicked} className="mr-2" />
            <Collapse isOpen={props.isOpen} navbar>
                {header}
            </Collapse>
        </Navbar>
    );
};

export default head;