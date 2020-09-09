import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';
import { Link } from 'react-router-dom';
import CUProducts from '../../../firebase/models/products/currentUserProds/CUProducts';
import Context from '../../../context/context';
import style from './profile.module.css';

const Profile = () => {
    const context = useContext(Context)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        CUProducts(setProducts, context.user.uid);
        setLoading(false)
    }, [])

    if (!!products !== true) {
        
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
    }else if(products.length ===0){
        return (
            <Card>
            <Button size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>
          
          <Card.Footer>you have no products selling right now</Card.Footer> 
          <Button onClick={signOut}>sign out</Button>

        </Card>
            )
        }


    return (
        <div>
            <Card>
                <Button size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>
            </Card>
            <div>
                <Col >
                    {products.map(({ imageUrl, title, price, description, creator, imageId }, index) => {
                        return (

                            <Row md key={index}>
                                <Card className={style.size}>
                                    <Card.Img className={style.sizeImg} variant="top" src={imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>

                                        <Card.Footer className="text-center">
                                            <Card.Text>Price: {price}   </Card.Text>
                                        </Card.Footer>

                                    </Card.Body>
                                </Card>
                            </Row>
                        )
                    })}
                </Col>
            <Button onClick={signOut}>sign out</Button>
            </div>
        </div>
    )
}

export default Profile;