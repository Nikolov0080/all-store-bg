import React, { useContext } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import OrderTable from './orderTable';
import style from './orders.module.css';
import completeOrder from '../../../firebase/models/user/orders/completeOrder/completeOrder';
import Context from '../../../context/context';
import CompleteModal from '../../components/modals/modalComplete';

const Order = ({ address, orderDetails, refreshOrders }) => {
    // console.log(address)
    // console.log(orderDetails)
   

    const complete = () => {
       
        refreshOrders(true);
    }

    const userId = useContext(Context).user.uid
    return (
        <div className="mt-5">
            <Card className="mt-3">
                <Card.Header as="h1">{orderDetails.title}</Card.Header>
                <Row sm>
                    <Col sm>
                        <Card.Img className={style.image_Size} src={orderDetails.imageUrl}></Card.Img>
                    </Col>
                    <Col className={style.table} >
                        <OrderTable // RENAME TODO
                            address={address}
                            orderDetails={orderDetails}
                        />
                      

                        <CompleteModal complete={complete} func={() => completeOrder(orderDetails.imageId, userId, orderDetails.orderId)} />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Order;