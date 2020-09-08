import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const path = `/products/`;

    /// FIREBASE DATA FETCH...

    const getImagePromise = (id) => {
        return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
            return url
        });
    }

    useEffect(() => {
        try {

            firebase.database().ref('users').once('value', async (snapshot) => {// get all users and userProducts in DB
                await snapshot.forEach(item => {

                    const prods = Object.values(item.val())
                    prods.forEach((productData) => {

                        getImagePromise(productData.imageId).then((imageResponse) => {

                            setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                        })
                    })
                })
            }).then(() => {
                setLoading(false)
            })
        } catch (error) {
            setError(error)
        }


    }, [error])

    /// FIREBASE DATA FETCH...


    if (loading) {
        return (
            <div>
                <div className="text-center">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                    <Button style={{width:'100%'}} size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>  

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
                                                <Card.Text>Price: {price}   </Card.Text>
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