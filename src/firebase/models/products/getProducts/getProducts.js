import firebase from 'firebase';


function getImagePromise(id) {
    return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
        return url
    })
}

const dbRef = firebase.database().ref('users')

const getProducts = () => {

    dbRef.once('value', (snapshot) => {// get all users and userProducts in DB
        snapshot.forEach(item=>{
            console.log(item.val())


        })
    })

    getImagePromise("-6kt9srd7d");
    return 'fuck ya'
}

export default getProducts;