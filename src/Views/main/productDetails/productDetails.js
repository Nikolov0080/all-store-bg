import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-bootstrap';
import style from './details.module.css';
import BuyForm from '../../components/buyForm/buyForm';
import { Link } from 'react-router-dom'
import ProductsTable from './productTable';
const ProductDetails = (props) => {

    const productId = props.location.state.productId;
    const [currentProduct, setCurrentProduct] = useState(null);
    const [buy, setBuy] = useState(false);
    
    useEffect(() => {

        firebase.database().ref('users/').once('value', (snapshot) => {

            const products = Object.values(snapshot.val())

            const allProds = products.reduce((acc, cVal) => {

                Object.assign(acc, cVal)

                return acc;
            }, {})

            setCurrentProduct(allProds[productId])
        })
    }, [productId]);

    if (currentProduct === null) {
        return (
            <h1>Loading...</h1>
        )
    }

    console.log(currentProduct)
    return (
        <div>
           
            <Card className={style.box} >
                 <Link to="/products">
                <Button style={{width:"100%"}} variant="danger">
                    <h2 className={style.backBtn}> {"<"} </h2>
                </Button>
            </Link>
              
                <Card.Img className={style.photo} src={props.location.state.imageUrl} /> 
                 <Card.Header className="text-center">
                    <h4 className={style.titleText}>{currentProduct.title} </h4>
                </Card.Header>
                <div className="text-center">
                   <ProductsTable
                    date={currentProduct.createdAt}
                   condition={currentProduct.condition}
                   creator={currentProduct.creator}
                   price={currentProduct.price}
                   />
                </div>
                <Button variant="success" onClick={() => setBuy(true)}>Buy</Button>
            </Card>

            {buy !== false ? <BuyForm /> : ''}
        </div>
    )
}

export default ProductDetails;