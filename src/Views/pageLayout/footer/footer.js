import React from 'react'
import { Card } from 'react-bootstrap';
import  style from './footer.module.css';

const Footer = (props) => {
    return (
        <div >
            <Card className={style.footer}>
                <Card.Header className="text-center">Featured</Card.Header>
              
            </Card>
        </div>
    )
}

export default Footer;