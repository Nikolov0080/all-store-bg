import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Row, Col, Alert } from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';
import { Link } from 'react-router-dom';
import CUProducts from '../../../firebase/models/products/currentUserProds/CUProducts';
import Context from '../../../context/context';
import style from './profile.module.css';
import Loading from '../../components/loading/loading';
import BtnGroup from '../../components/buttonGroup/btnGroup';
import deleteProduct from '../../../firebase/models/products/deleteProduct/deleteProduct';

const Profile = () => {

    const context = useContext(Context)
    const [products, setProducts] = useState('');
    const [loading, setLoading] = useState(true);

    const path = `/products/`;

    const deleteOne = (id)=>{
        deleteProduct(context.user.uid,id)
        console.log("deleted!")
    }

    useEffect(() => {
        CUProducts(setProducts, context.user.uid);
    }, [context]);

    useEffect(() => {
        if (products.length !== 0) {
            setTimeout(()=>{
                setLoading(false);
            },450)
        } else {
            setLoading(false)
        }
    }, [products]);

    if (loading) {
        return (
            <Loading />
        )
    }
    // TODO fix loading

    if (products !== '') {

        return (
            <div>
                <BtnGroup />
                <div>
                    <Alert className="text-center" variant="primary"><h1>Items you sell</h1></Alert>
                    <Row >
                        {products.map(({ imageUrl, title, price, creatorId, creator, imageId }, index) => {
                            return (
                                <Col sm key={index}>

                                    <Card className={style.size}>
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

                                            <Button variant="danger" onClick={()=>deleteOne(imageId)} style={{ width: "50%" }}>Delete</Button>
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
            <BtnGroup />
            <Alert className="text-center" variant="primary"><h1>No items to show</h1></Alert>
        </div>
    )
}

export default Profile;