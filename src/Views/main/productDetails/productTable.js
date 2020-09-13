import React from 'react'
import {Table} from 'react-bootstrap';
const ProductsTable = ({date,condition,creator,price}) => {
    return (
        <div>
            <Table  bordered hover>
                <tbody>
                    <tr>
                        <td>Date posted</td>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{condition}</td>
                    </tr>
                    <tr>
                        <td>Creator</td>
                        <td>{creator}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td style={{color:"green"}}>{price}.00 USD</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ProductsTable;