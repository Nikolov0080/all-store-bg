import firebase from 'firebase';

const placeOrder = (data) => {

    const {
        creatorId,
        buyerId,
        price,
        imageId,
        imageUrl,
        title,
        condition,
        fullName,
        city,
        postOffice,
        phoneNumber
    } = data


    const userRef = firebase.database().ref("users").child(buyerId + "/purchases/")
    const deleteData = firebase.database().ref("users").child(creatorId + "/products/").child(imageId)
    // const deleteImage = firebase.storage().ref("images/").child(imageId)
    // deleteImage.delete()


  return  userRef.push({
        orderDetails: {
            price,
            imageId,
            title,
            condition,
            imageUrl
        },
        address: {
            fullName,
            city,
            postOffice,
            phoneNumber
        }

    }).then((resp) => {

        deleteData.remove()

    }).catch((err) => {
        console.log(err);
    })

}

export default placeOrder;