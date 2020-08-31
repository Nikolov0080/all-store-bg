import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';
import {NavLink } from 'react-router-dom';

const Navigation = () => {

    const links = navLinks(false); // change for user

    return (
        <div>
            <Navbar className="nav justify-content-center" variant="dark">
                <Nav >
                    {links.map((link, index) => {
                        return <Nav.Link style={{fontSize:"20px",paddingLeft:'20px',paddingRight:"20px"}} as={NavLink} key={index} to={link.link}>{link.name} </Nav.Link> 
                    })}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
