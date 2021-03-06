import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-bootstrap';
import style from './details.module.css';
import BuyForm from '../../components/buyForm/buyForm';
import ProductsTable from './productTable';
import deleteProduct from '../../../firebase/models/products/deleteProduct/deleteProduct';
import { useHistory } from 'react-router-dom';
import DeleteModal from '../../components/modals/modal';

const ProductDetails = (props) => {

    const history = useHistory();
    const userId = props.location.state.userId;
    const productId = props.location.state.productId;
    const isCreator = props.location.state.isCreator;
    const [currentProduct, setCurrentProduct] = useState(null);
    const [buy, setBuy] = useState(false);

    useEffect(() => {

        firebase.database().ref('users').once('value', (snapshot) => {

            const data = snapshot.val()
            if (data) {
                const cProduct = Object.values(data).reduce((acc, cVal) => {

                    const products = Object.values(cVal)[0];

                    for (const key in products) {
                        if (key === productId) {
                           Object.assign(acc,products[key]) 
                           
                        }
                    }

                    return acc
                }, {})
                
                    setCurrentProduct(cProduct);
            }

        });

    }, [productId, userId]);

    const deleteOne = (CP) => {
        deleteProduct(CP.creatorId, CP.imageId).then((response) => {
            history.push({
                pathname:'/profile',
                state:{
                    type:"error",
                    message:"PRODUCT DELETED !",
                    show:true
                }
            });
        }).catch((e) => { console.log(e); return });
    }

    if (currentProduct === null) {
        return (
            <h1>Loading... </h1>
        )
    }
    return (

        <div>
            <Card className={style.box} >
                <Button onClick={() => props.history.goBack()} style={{ width: "100%" }} variant="outline-success">
                    <h2 className={style.backBtn}> {"< Back"} </h2>
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
                    ? <DeleteModal delFunc={deleteOne} id={currentProduct} />// TODO complete delete functionality
                    : <Button variant="success" onClick={() => setBuy(true)}>Buy</Button>
                }

            </Card>
            {buy !== false ? <BuyForm hide={setBuy} productData={{...currentProduct,buyerId:userId,imageUrl:props.location.state.imageUrl}} /> : ''}
        </div>
    )
}

export default ProductDetails;