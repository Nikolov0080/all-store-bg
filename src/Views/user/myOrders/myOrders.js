import React ,{useContext}from 'react'
import Context from '../../../context/context';
import getOrders from '../../../firebase/models/user/orders/getOrders/getOrders';

const MyOrders = () => {

    const context = useContext(Context);
const orders = getOrders(context.user.uid);

console.log(orders)
    return (
        <div>
          
                my orders
   
        </div>
    )
}

export default MyOrders
