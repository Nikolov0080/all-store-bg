import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';
import { NavLink } from 'react-router-dom';
import Context from '../../../context/context';
import '../../../firebase/SDK';

const Navigation = () => {

    const context = useContext(Context);
    const links = navLinks(context.user)

    return (

        <div>
            <Navbar expand="lg" sticky="top" >
                <Navbar.Brand >
                    <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px", }} as={NavLink} to='/'>ALL STORE</Nav.Link>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {links.map((link, index) => {

                        if (link.name === 'Profile') {
                                return (
                                <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px", }}
                                    as={NavLink} key={index} to={link.link}>{link.name + " [ " + context.user.displayName + " ] "} </Nav.Link>
                            )
                        }

                        return (
                            <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px", }} as={NavLink} key={index} to={link.link}>{link.name} </Nav.Link>
                        )
                    })}

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;