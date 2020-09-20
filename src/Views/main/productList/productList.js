import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import getProducts from '../../../firebase/models/products/getProducts/getProducts';
import Context from '../../../context/context';
import Pagination from '../../components/pagination/pagination';


const ProductList = (props) => {
    const path = `/products/`;

    const context = useContext(Context)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentSelect, setCurrentSelect] = useState([]);
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        try {
            getProducts(setProducts).then(() => {
                setLoading(false)
            })

        } catch (error) {
            setError(error)
        }

    }, []);

    useEffect(() => {
        setCurrentSelect(products.slice(0, perPage))
    }

        , [products,perPage])

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

                <Button variant="outline-success" size="lg" className="mt-1" style={{ width: '100%', marginBottom: '1em' }}>
                    <Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link>
                </Button>

                <ErrorBoundary message='Server do not respond , please try again later'>
                <Pagination 
                    products={products}
                     setCurrentSelect={setCurrentSelect}
                     perPage={perPage}
                     setPerPage={setPerPage}
                     />

                    {error !== false ? new Error() : ''}
                    <Row >
                        {currentSelect.map(({ imageUrl, title, price, creatorId, creator, imageId }, index) => {
                            return (

                                <Col md key={index}>
                                    <Card className={style.size}>
                                        <Card.Img className={style.sizeImg} variant="top" src={imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>

                                            <Card.Footer className="text-center">
                                                <Card.Header><h4 style={{ color: "green" }}>{price}.00 USD</h4> </Card.Header>
                                                <Card.Text>Posted by : [ {creator} ]</Card.Text>
                                            </Card.Footer>
                                            <Link to={{
                                                pathname: path + creator.toLowerCase(),
                                                state: {
                                                    productId: imageId, imageUrl, userId: context.user.uid,
                                                    isCreator: !!(creatorId === context.user.uid)
                                                }
                                            }}>

                                                <Button variant="success" style={{ width: "100%" }}>Details</Button>

                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                    <Pagination 
                    products={products}
                     setCurrentSelect={setCurrentSelect}
                     perPage={perPage}
                     setPerPage={setPerPage}
                     />
                </ErrorBoundary>

            </div>
        )
    }
}

export default ProductList;