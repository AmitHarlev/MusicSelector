import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAjjMneb2aYcGWPuunh-AlfjYJQY2mccr0",
    authDomain: "musicselector-dtech.firebaseapp.com",
    databaseURL: "https://musicselector-dtech.firebaseio.com",
    projectId: "musicselector-dtech",
    storageBucket: "musicselector-dtech.appspot.com",
    messagingSenderId: "740276646415"
};
const fire = firebase.initializeApp(config);
export default fire;