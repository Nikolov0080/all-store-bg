import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/context';
import getOrders from '../../../firebase/models/user/orders/getOrders/getOrders';
import Loading from '../../components/loading/loading';
import Order from '../../components/order/order';

const MyOrders = () => {

    const [orders, setOrders] = useState('');
    const [loading, setLoading] = useState('true')
    const context = useContext(Context);
    const [refreshOrders, setRefreshOrders] = useState(true);

    useEffect(() => {

        if(refreshOrders){
             getOrders(context.user.uid, setOrders).then(() => {
            setLoading(false);
            setRefreshOrders(false);
        });
        }
       

    }, [context, setOrders,setRefreshOrders,refreshOrders]);

    if (orders.length === 0) {
        return (
            <h1>No orders</h1>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            {orders.map(({ address, orderDetails }, index) => {
                return (
                    <div key={index}>

                        <Order
                            refreshOrders={setRefreshOrders}
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
