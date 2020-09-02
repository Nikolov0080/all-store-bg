
export default (user) => {
    if (user === null) {
        return [
            {
                link: '/',
                name: "All Store"
            },
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
                link: '/',
                name: "All Store"
            },
            {
                link: '/profile',
                name: "Profile"
            },
            {
                link: '/products',
                name: "Products"
            }
        ]
    }
}