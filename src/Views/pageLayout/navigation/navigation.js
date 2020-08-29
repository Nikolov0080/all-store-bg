import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';

const Navigation = () => {

const links = navLinks(false); // change for user

    return (
        <div>
            <Navbar variant="dark">
                <Nav >
                    {links.map((link,index)=>{
                  return  <Nav.Link key={index} href={link.link}>{link.name}</Nav.Link>
                    })}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
