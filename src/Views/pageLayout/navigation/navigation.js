import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import navLinks from './navLinks';
import { NavLink } from 'react-router-dom';
import Context from '../../../context/context';
import '../../../firebase/SDK';

const Navigation = () => {

    const context = useContext(Context);

    const links = navLinks(context.user);

    return (
        <div >
            <Navbar expand="sm" sticky="top" className="nav justify-content-center text-center" variant="dark">
                <Nav >
                    {links.map((link, index) => {
                        if(link.name==='Profile'){
                            return <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px",  }} 
                            as={NavLink} key={index} to={link.link}>{link.name + " [ "+ context.user.displayName +" ] " } </Nav.Link>
                        }
                        return <Nav.Link style={{ fontSize: "20px", paddingLeft: '20px', paddingRight: "20px",  }} as={NavLink} key={index} to={link.link}>{link.name} </Nav.Link>
                    })}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;