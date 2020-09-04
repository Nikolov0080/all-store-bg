import firebase from 'firebase';

const dbRef =  firebase.database().ref('products');
const storageRef = firebase.storage().ref('images')
const createProduct = (data) => {

    const { condition, description, price, title } = data;
    const { image } = data

    storageRef.put(image[0]).then((resp)=>{
        console.log(resp)
    })


}

export default createProduct;