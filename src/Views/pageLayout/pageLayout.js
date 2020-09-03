import React from 'react'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import { Container } from 'react-bootstrap'

const PageLayout = (props) => {
    return (
        <div>
            <Navigation />

            <Container style={{marginBottom:'10em'}} as="div" fluid>
                {props.children}
            </Container>

            <Footer />

        </div>
    )
}

export default PageLayout;