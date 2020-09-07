import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-bootstrap';
import style from './details.module.css';
import BuyForm from '../../components/buyForm/buyForm';
import { Link } from 'react-router-dom'
const ProductDetails = (props) => {

    console.log(props.location.state)
    const productId = props.location.state.productId;
    const [currentProduct, setCurrentProduct] = useState(null);
    const [buy, setBuy] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.database().ref('users/').once('value', (snapshot) => {

            const products = Object.values(snapshot.val())

            const allProds = products.reduce((acc, cVal) => {

                Object.assign(acc, cVal)

                return acc;
            }, {})

            setCurrentProduct(allProds[productId])
        })
    }, [productId])


    if (currentProduct === null) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <Link to="/products">
                <Button variant="danger">
                    <h2 className={style.backBtn}> {"<"} </h2>
                </Button>
            </Link>
            <Card className={style.box} >
                <Card.Header>

                    <h4 className={style.titleText}>{currentProduct.title} </h4>

                </Card.Header>
                <Card.Img className={style.photo} src={props.location.state.imageUrl} />
                <div className="text-center">
                    <Card.Body>
                        <Card.Header><h3>Description</h3>
                            <br />
                            {currentProduct.description}
                            <br />
                            <h4 style={{ color: 'green' }}>{currentProduct.price} USD</h4>
                        </Card.Header>
                    </Card.Body>
                </div>
                <Button variant="success" onClick={() => setBuy(true)}>Buy</Button>
            </Card>

            {buy !== false ? <BuyForm /> : ''}
        </div>
    )
}

export default ProductDetails;