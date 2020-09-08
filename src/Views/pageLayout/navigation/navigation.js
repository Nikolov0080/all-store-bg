import React, { useContext, useRef } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';
import { NavLink } from 'react-router-dom';
import Context from '../../../context/context';
import '../../../firebase/SDK';

const Navigation = () => {

    const context = useContext(Context);

    const links = navLinks(context.user);
    const linkRef = useRef(links);

    return (

        <React.Fragment >

            <Navbar expand="lg" sticky="top" variant="dark">
                <Navbar.Brand >
                <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px", }} as={NavLink}to='/'>ALL STORE</Nav.Link>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {linkRef.current.map((link, index) => {
                        
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
        </React.Fragment>
    )
}

export default Navigation;