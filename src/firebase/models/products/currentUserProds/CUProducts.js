import firebase from 'firebase';

import getImage from '../getImage/getImage';

const currentUserProducts = (setProducts, ID) => {
    
    return  firebase.database().ref('users').once('value', (snap) => {
        snap.forEach((data) => {
            console.log(data.key)
            console.log(ID)
            if (ID === data.key) {
                const prods = Object.values(data.val())
                prods.forEach( (productData) => {
                    
                  getImage(productData.imageId).then(async(imageResponse) => {
                        
                     setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                    })
                })

            }
        })
    })
}

export default currentUserProducts;