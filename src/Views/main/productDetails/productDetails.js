import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Card } from 'react-bootstrap';
import style from './details.module.css';

const ProductDetails = (props) => {

    console.log(props.location.state)
    const productId = props.location.state.productId;
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.database().ref('users/').once('value', (snapshot) => {

            const products = Object.values(snapshot.val())

            const allProds = products.reduce((acc, cVal) => {

                Object.assign(acc, cVal)

                return acc
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
            <Card className={style.box} >
                <Card.Header><h4>{currentProduct.title} </h4></Card.Header>
                <Card.Img className={style.photo} src={props.location.state.imageUrl} />
                <div className="text-center">
                    <Card.Body>
                        <Card.Header><h3>Description</h3>
                            <br />
                            {currentProduct.description}
                        </Card.Header>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default ProductDetails;