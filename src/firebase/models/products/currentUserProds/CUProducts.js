import firebase from 'firebase';
import getImage from '../getImage/getImage';

const currentUserProducts = (setProducts, ID) => {
setProducts('');
    return firebase.database().ref('users/' + ID + '/products').once('value', (snap) => {
        snap.forEach((roughData) => {
            const productData = roughData.val()
            if (ID === productData.creatorId) {
                getImage(productData.imageId).then(async (imageResponse) => {
                    return setProducts(oldArray => [...oldArray, { ...productData, imageUrl: imageResponse }]);
                })
            }
        })
    })
}

export default currentUserProducts;