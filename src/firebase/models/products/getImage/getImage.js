import firebase from 'firebase';

const getImagePromise = (id) => {
    return firebase.storage().ref('images/' + id).getDownloadURL().then((url) => {
        return url
    });
}

export default getImagePromise;