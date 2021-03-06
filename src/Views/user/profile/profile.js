import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';
import { Link } from 'react-router-dom';
import CUProducts from '../../../firebase/models/products/currentUserProds/CUProducts';
import Context from '../../../context/context';
import style from './profile.module.css';
import Loading from '../../components/loading/loading';
import BtnGroup from '../../components/buttonGroup/btnGroup';
import deleteProduct from '../../../firebase/models/products/deleteProduct/deleteProduct';
import DeleteModal from '../../components/modals/modal';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import Notifications from '../../components/notifications/notifications';

const Profile = (props) => {

    const notification = props.location.state;
    const context = useContext(Context)
    const [products, setProducts] = useState('');
    const [loading, setLoading] = useState(true);
    const path = `/products/`;

    const deleteOne = (id) => {
        setLoading(true);
        deleteProduct(context.user.uid, id).then(resp => {
            CUProducts(setProducts, context.user.uid).then(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 550)
            })
        })
        console.log("deleted!")
    }

    useEffect(() => {
        CUProducts(setProducts, context.user.uid).then((response) => {
            if (response) {
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            }
        });
    }, [context]);

    if (loading && products === '') {
        return (
            <Loading />
        )
    }
    if (products !== '') {

        return (
            <ErrorBoundary>

                {!!(notification) === true ?
                    <Notifications type={notification.type} message={notification.message} show={notification.show} />
                    :
                    ""
                }

                <div>

                    <BtnGroup foo={signOut} />
                    <div>

                        <Row >
                            {products.map(({ imageUrl, title, price, creatorId, creator, imageId }, index) => {
                                return (
                                    <Col sm key={index}>

                                        <Card className={style.size}>
                                            <Card.Img className={style.sizeImg} variant="top" src={imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>

                                                <h4 style={{ color: "green" }}>{price}.00 USD</h4>

                                                <Link to={{
                                                    pathname: path + creator.toLowerCase(),
                                                    state: {
                                                        productId: imageId, imageUrl, userId: context.user.uid,
                                                        isCreator: !!(creatorId === context.user.uid)
                                                    }
                                                }}>
                                                    <Button variant="success" style={{ width: "100%" }}>Details</Button>
                                                </Link>

                                                <DeleteModal delFunc={deleteOne} id={imageId} />

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                </div>
            </ErrorBoundary>

        )
    }

    return (
        <div>
            <BtnGroup foo={signOut} />
            <Card className="text-center" variant="primary"><h1>No items to show</h1></Card>
        </div>
    )
}

export default Profile;