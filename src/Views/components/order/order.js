import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import AddressTable from './addressTable';
import style from './orders.module.css'
const Order = ({ address, orderDetails }) => {
    console.log(address)
    console.log(orderDetails)

    return (
        <div className="mt-5">
            <Card className="mt-3">
                <Card.Header as="h1">{orderDetails.title}</Card.Header>
                <Row sm>
                    <Col sm>
                        <Card.Img className={style.image_Size} src={orderDetails.imageUrl}></Card.Img>
                    </Col>
                    <Col className={style.table} >
                        <AddressTable // RENAME TODO
                            address={address}
                            orderDetails={orderDetails}
                        />
                        <Button variant="success" style={{width:"100%"}} >Confirm received</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Order
