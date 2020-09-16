import React,{useContext} from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import OrderTable from './orderTable';
import style from './orders.module.css';
import completeOrder from '../../../firebase/models/user/orders/completeOrder/completeOrder';
import Context from '../../../context/context';

const Order = ({ address, orderDetails }) => {
    // console.log(address)
    // console.log(orderDetails)
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
                        <Button onClick={() => completeOrder(orderDetails.imageId,userId)}
                            variant="success"
                            style={{ width: "100%" }} >Confirm received</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Order;