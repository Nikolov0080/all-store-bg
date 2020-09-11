import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/main/home/home';
import Login from './Views/user/login/login';
import Register from './Views/user/register/register';
import Profile from './Views/user/profile/profile';
import Products from './Views/main/productList/productList';
import PageLayout from './Views/pageLayout/pageLayout';
import ProductDetails from './Views/main/productDetails/productDetails';
import AddProduct from './Views/user/addProduct/addProduct';
import ProtectedRoute from './protectedRoutes/user';
import ProtectedRouteGuest from './protectedRoutes/guest';
import MyOrders from './Views/user/myOrders/myOrders';

const PageRouter = () => {
    return (
        <div>
            <Router>
                <PageLayout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <ProtectedRoute exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/register" component={Register} />
                        <ProtectedRouteGuest exact path="/profile" component={Profile} />
                        <ProtectedRouteGuest exact path="/products" component={Products} />
                        <ProtectedRouteGuest exact path="/products/:product" component={ProductDetails} />
                        <ProtectedRouteGuest exact path="/add-product" component={AddProduct} />
                        <ProtectedRouteGuest exact path="/my-orders" component={MyOrders} />


                        {/* ADD PRODUCT DETAILS LATER ON ! */}
                    </Switch>
                </PageLayout>
            </Router>
        </div>
    )
}

export default PageRouter;