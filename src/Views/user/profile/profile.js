import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Row, Col, Container, Table } from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';
import { Link } from 'react-router-dom';
import CUProducts from '../../../firebase/models/products/currentUserProds/CUProducts';
import Context from '../../../context/context';
import style from './profile.module.css';
import Loading from '../../components/loading/loading';

const Profile = () => {
    const context = useContext(Context)
    const [products, setProducts] = useState('');
    const [loading, setLoading] = useState(true);

    const path = `/products/`;

    useEffect(() => {
        CUProducts(setProducts, context.user.uid);
    }, [context])

    useEffect(() => {
        if (products.length !== 0) {
            setLoading(false);
        } else {
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }
    }, [products]);

    if (loading) {
        return (
            <Loading />
        )
    }

    if (products !== '') {

        return (
            <div>
                <Card>
                    <Button size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>
                </Card>
                <div>
                        <Row >
                            {products.map(({ imageUrl, title, price, creatorId, creator, imageId }, index) => {
                                return (
                                    <Col sm key={index}>

                                        <Card bg="info" className={style.size}>
                                            <Card.Img className={style.sizeImg} variant="top" src={imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>

                                                    <h4>{price}.00 USD</h4>

                                                    {/* ///////////////// */}
                                                    <Link to={{
                                                        pathname: path + creator.toLowerCase(),
                                                        state: {
                                                            productId: imageId, imageUrl,
                                                            isCreator: !!(creatorId === context.user.uid)
                                                        }
                                                    }}>
                                                        <Button variant="success" style={{ width: "50%" }}>Details</Button>
                                                    </Link>
                                                    {/* ///////////////// */}

                                                    <Button variant="danger" style={{ width: "50%" }}>Delete</Button>
                                                    {/* TODO */}

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>



                    <Button onClick={signOut}>sign out</Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Card>
                <Button size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>
            </Card>
            <Card className="text-center">
                <Card.Text>No items selling</Card.Text>
            </Card>
        </div>

    )
}

export default Profile;