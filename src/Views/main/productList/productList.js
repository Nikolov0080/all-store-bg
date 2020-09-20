import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import getProducts from '../../../firebase/models/products/getProducts/getProducts';
import Context from '../../../context/context';
import ReactPaginate from 'react-paginate';
import Pagination from '../../components/pagination/pagination';

import './style.module.css'

const ProductList = (props) => {

    const context = useContext(Context)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [pageCount, setPageCount] = useState(0);
    const [perPage, setPerPage] = useState(4);
    const [currentSelect, setCurrentSelect] = useState([]);

    const handlePageClick = (data) => {
        
        const currentValue = data.selected + 1;
        setCurrentSelect(value => products.slice(currentValue, currentValue + perPage));
        console.log(currentValue)
    };


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
    useEffect(() => {
        setPageCount(Math.ceil(products.length / perPage));
        setCurrentSelect(products.slice(0,perPage))
    }, [products, perPage])


    console.log(pageCount)
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
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount} //this.state.pageCount
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick} //
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />

                    <Pagination perPage={perPage} />
                </ErrorBoundary>

            </div>
        )
    }
}

export default ProductList;