import firebase from 'firebase';

const getImagePromise = (id) => {
    return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
        return url
    });
}

const currentUserProducts = (setProducts, ID) => {
    return firebase.database().ref('users').on('value', (snap) => {

        snap.forEach((data) => {
            if (ID === data.key) {
                const prods = Object.values(data.val())
                prods.forEach((productData) => {

                    getImagePromise(productData.imageId).then((imageResponse) => {

                      return  setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                    })
                })

            }
        })
    })
}

export default currentUserProducts;