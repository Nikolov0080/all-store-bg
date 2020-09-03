import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';
import test from './test.jpg';

const ProductList = (props) => {

    const path = `/products/`;

    const products = [
        {
            image: test,
            title: "Product Title",
            description: 'hdask hjkfsdfsdfsdfsfsdfsdfsdfsdf dfsdfsdfhdkj ashd kj',
            price: 40,
            condition: "new",
            createdAt: '12.06.2021',
            creator: "Gencho"
        },
        {
            image: test,
            title: "Product Title",
            description: 'h123 shdjashdkj ashd kj',
            price: 10,
            condition: "new",
            createdAt: '12.06.2021',
            creator: "Mincho"
        },
        {
            image: test,
            title: "Product Title",
            description: 'h232 fds hjkashdjashdkj ashd kj',
            price: 402,
            condition: "new",
            createdAt: '12.06.2021',
            creator: "Goshko"
        },
        {
            image: test,
            title: "Product Title",
            description: 'hdask hjkashdjashdkj ashd kj',
            price: 650,
            condition: "new",
            createdAt: '12.06.2021',
            creator: "Ivan"
        }
    ]

    return (
        <div>
            Product list
            <Row >
                {products.map(({ image, title, price, description, creator }, index) => {
                    return (
                        <Col md key={index}>
                            <Card className={style.size}>
                                <Card.Img className={style} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>

                                    <Card.Footer className="text-center">
                                        <Card.Text>Price: {price}   </Card.Text> 
                                        <Card.Text>Posted by : [ {creator} ]</Card.Text>
                                    </Card.Footer>
                                    <Button variant="primary">
                                        {/* use the product name or identifier to set path to details page */}
                                        <Link to={path + creator.toLowerCase()}>View details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default ProductList;