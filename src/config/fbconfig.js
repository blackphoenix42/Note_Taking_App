import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDxBPtdDOrwreBIaWMzHL0RbnN1NLgmbQo",
    authDomain: "notes-taking-app-7ac79.firebaseapp.com",
    projectId: "notes-taking-app-7ac79",
    storageBucket: "notes-taking-app-7ac79.appspot.com",
    messagingSenderId: "67563829692",
    appId: "1:67563829692:web:5148a0e0b052e3590d13b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);