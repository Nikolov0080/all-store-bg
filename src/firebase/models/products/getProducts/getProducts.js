import firebase from 'firebase';


const getImagePromise = (id) => {
    return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
        return url
    });
}
const getProducts = ( setProducts) => {



   return firebase.database().ref('users').once('value', async (snapshot) => {// get all users and userProducts in DB
        await snapshot.forEach(item => {

            const prods = Object.values(item.val())
            prods.forEach((productData) => {

                getImagePromise(productData.imageId).then((imageResponse) => {

                    setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                })
            })
        })
    })
}

export default getProducts;