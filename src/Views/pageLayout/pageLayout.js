import React from 'react'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import style from './pageLayout.module.css';
import { Container } from 'react-bootstrap'

const PageLayout = (props) => {
    return (
        <div>
            <Navigation />

            <Container fluid>
                PageLayout
            {props.children}
            </Container>

            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default PageLayout;