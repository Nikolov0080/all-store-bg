import firebase from 'firebase';

import getImage from '../getImage/getImage';

const currentUserProducts = (setProducts, ID) => {
    
    return  firebase.database().ref('users').once('value', (snap) => {
        snap.forEach((data) => {

            if (ID === data.key) {
                const prods = Object.values(data.val())
                prods.forEach( (productData) => {
                    
                  getImage(productData.imageId).then(async(imageResponse) => {
                        
                  return setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                    })
                })

            }
        })
    })
}

export default currentUserProducts;