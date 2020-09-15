import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/context';
import getOrders from '../../../firebase/models/user/orders/getOrders/getOrders';
import Loading from '../../components/loading/loading';
import Order from '../../components/order/order';

const MyOrders = () => {

    const [orders, setOrders] = useState('');
    const [loading, setLoading] = useState('true')
    const context = useContext(Context);

    useEffect(() => {
        getOrders(context.user.uid, setOrders).then(() => {
            setLoading(false);
        })
    }, [context, setOrders]);

    if (orders === null) {
        return (
            <h1>No orders</h1>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    console.log(orders)

    return (
        <div>
            {orders.map(({ address, orderDetails }, index) => {
                return (
                    <div  key={index}>

                        <Order
                          
                            address={address}
                            orderDetails={orderDetails}
                        />
                    </div>
                )
            })}

        </div>
    )
}

export default MyOrders
