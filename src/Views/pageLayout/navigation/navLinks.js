
export default (user) => {
    if (user === null) {
        return [
           
            {
                link: '/login',
                name: "Login"
            },
            {
                link: '/register',
                name: "Register"
            }
        ]
    } else {
        return [
           
            {
                link: '/profile',
                name: "Profile"
            },
            {
                link: '/products',
                name: "Products"
            },
            {
                link:'/my-orders',
                name:'My Orders'
            }
        ]
    }
}