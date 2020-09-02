import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';
import { NavLink } from 'react-router-dom';
import Context from '../../../context/context';
import '../../../firebase/SDK';

const Navigation = () => {

    const context = useContext(Context);

    const user = context.user;

    const links = navLinks(user); // change for user

    return (
        <div>
            <Navbar className="nav justify-content-center" variant="dark">
                <Nav >
                    {links.map((link, index) => {
                        return <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px" }} as={NavLink} key={index} to={link.link}>{link.name} </Nav.Link>
                    })}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;