import React ,{useContext}from 'react'
import Context from '../../../context/context';
import getOrders from '../../../firebase/models/user/orders/getOrders/getOrders';

const MyOrders = () => {

    const context = useContext(Context);
getOrders(context.user.uid)
    return (
        <div>
          
                my orders
   
        </div>
    )
}

export default MyOrders
