import React, {  useState, useEffect } from 'react';
import firebase from 'firebase';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './productList.module.css';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const path = `/products/`;

    /// FIREBASE DATA FETCH...
    const getImagePromise = (id) => {
        return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
            return url
        });
    }

    useEffect(() => {
        firebase.database().ref('users/').once('value', async (snapshot) => {// get all users and userProducts in DB
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

    }, [])

    /// FIREBASE DATA FETCH...

    if (loading) {
        return (
            <div>
                <div>
                    Product list
                <Row >
                        {products.map(({ imageUrl, title, price, description, creator }, index) => {
                            return (
                                <Col md key={index}>
                                    <Card className={style.size}>
                                     <Card.image />
                                       
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Product list
                <Row >
                    {products.map(({ imageUrl, title, price, description, creator }, index) => {
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
                                        <Button variant="success" style={{width:"100%"}}>
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


}

export default ProductList;