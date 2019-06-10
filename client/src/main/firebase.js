import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDUmBiyuJgOUzYvghXjkn_8MBKwFRMzV4U",
    authDomain: "nails-test.firebaseapp.com",
    databaseURL: "https://nails-test.firebaseio.com",
    projectId: "nails-test",
    storageBucket: "nails-test.appspot.com",
    messagingSenderId: "62775543575"
};
var fireBase = firebase.initializeApp(config);

export default fireBase;