import firebase from 'firebase';

import getImage from '../getImage/getImage';

const currentUserProducts = (setProducts, ID) => {
    setProducts('')
    return  firebase.database().ref('users').once('value', (snap) => {
        snap.forEach((data) => {
            if (ID === data.key) {
                const prods = Object.values(data.val())
                prods.forEach( (productData) => {
                    
                    return  getImage(productData.imageId).then(async(imageResponse) => {
                        

                    return await setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                    })
                })

            }
            return true
        })
    })
}

export default currentUserProducts;