import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import getProducts from '../../../firebase/models/products/getProducts/getProducts';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const path = `/products/`;

    useEffect(() => {
        try {
            getProducts(setProducts).then(() => {
                setLoading(false)
            })

        } catch (error) {
            setError(error)
        }
    }, [])

    if (loading) {
        return (
            <div>
                <div className="text-center">
                    <h1>Loading...
                    <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </h1>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Button style={{ width: '100%', marginBottom: '1em' }} size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>

                <ErrorBoundary message='Server do not respond , please try again later'>
                    {error !== false ? new Error() : ''}
                    <Row >
                        {products.map(({ imageUrl, title, price, description, creator, imageId }, index) => {
                            return (

                                <Col md key={index}>
                                    <Card className={style.size}>
                                        <Card.Img className={style.sizeImg} variant="top" src={imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>

                                            <Card.Footer className="text-center">
                                                <Card.Header>Price: {price} </Card.Header>
                                                <Card.Text>Posted by : [ {creator} ]</Card.Text>
                                            </Card.Footer>
                                            <Link to={{
                                                pathname: path + creator.toLowerCase(),
                                                state: { productId: imageId, imageUrl }
                                            }}>

                                                <Button variant="success" style={{ width: "100%" }}>Details</Button>

                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </ErrorBoundary>

            </div>
        )
    }
}

export default ProductList;