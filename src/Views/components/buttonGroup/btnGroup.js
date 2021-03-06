import React from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BtnGroup = ({ foo }) => {
    return (
        <div className="text-center">
            <DropdownButton style={{margin:"10px"}} size="lg" as={ButtonGroup} title="Profile">
                <Dropdown.Item  as="div" eventKey="1">
                    <Link to={'/add-product'}> <Button  variant="outline-primary" size="lg" >Sell on All-store </Button></Link>
                </Dropdown.Item>
                <Dropdown.Item as="div" >
                    <Link to={'/my-orders'}> <Button variant="outline-primary" size="lg" >Check your orders </Button></Link>
                </Dropdown.Item>
                <Dropdown.Item as="div" >
                    <Button size="lg" variant="outline-danger" onClick={foo}>Sign Out</Button>
                </Dropdown.Item>
            </DropdownButton>
        </div>
    )
}


export default BtnGroup;