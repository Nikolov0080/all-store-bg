import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhIqoC907Vz-iDcWuhc6i0lVQEAGztDlU",
    authDomain: "all-store-bg.firebaseapp.com",
    databaseURL: "https://all-store-bg.firebaseio.com",
    projectId: "all-store-bg",
    storageBucket: "all-store-bg.appspot.com",
    messagingSenderId: "740498929007",
    appId: "1:740498929007:web:3baae9770eb0984d60a49a"
};

export default firebase.initializeApp(firebaseConfig).database();