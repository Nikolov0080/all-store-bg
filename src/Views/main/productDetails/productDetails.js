import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-bootstrap';
import style from './details.module.css';
import BuyForm from '../../components/buyForm/buyForm';
import ProductsTable from './productTable';
import deleteProduct from '../../../firebase/models/products/deleteProduct/deleteProduct';
import {useHistory} from 'react-router-dom';

const ProductDetails = (props) => {

    const history = useHistory();
    const productId = props.location.state.productId;
    const isCreator = props.location.state.isCreator;
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

    const deleteOne = () => {
        deleteProduct(currentProduct.creatorId, currentProduct.imageId).then(()=>{
            history.goBack();
        })
    }

    if (currentProduct === null) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (

        <div>
            <Card className={style.box} >
                <Button onClick={() => props.history.goBack()} style={{ width: "100%" }} variant="danger">
                    <h2 className={style.backBtn}> {"<"} </h2>
                </Button>

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

                {isCreator === true
                    ? <Button variant="danger" onClick={deleteOne}> Delete</Button> // TODO complete delete functionality
                    : <Button variant="success" onClick={() => setBuy(true)}>Buy</Button>
                }
            </Card>
            {buy !== false ? <BuyForm /> : ''}
        </div>
    )
}

export default ProductDetails;