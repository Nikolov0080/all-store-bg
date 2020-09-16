import React from 'react'
import { Table } from 'react-bootstrap';

const OrderTable = ({ address, orderDetails }) => {

const {
fullName,
city,
phoneNumber,
postOffice
}= address;

const {
price,
condition
}= orderDetails;

    return (
        <div>
            <Table className="mt-3 lg" bordered hover>
                <thead>
                    <tr>
                        <th>Address info</th>
                        <th>Order details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name: <b>{fullName}</b></td>
                        <td>Price: <b style={{color:"green"}}>{price}.00 USD</b></td>
                    </tr>
                    <tr>
                        <td>City: <b>{city}</b></td>
                        <td>Condition: <b>{condition}</b></td>
                    </tr>
                    <tr>
                        <td>Phone: <b>{phoneNumber}</b></td>
                    </tr>
                    <tr>
                        <td>Post office: <b>{postOffice}</b></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default OrderTable;