import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyAJNkwLwIFpuvSxu3GKDVRKj703-0dxqvY',
    authDomain: 'colorful-a8f98.firebaseapp.com',
    databaseURL: 'https://colorful-a8f98.firebaseio.com',
    projectId: 'colorful-a8f98',
    storageBucket: 'colorful-a8f98.appspot.com',
    messagingSenderId: '999694524235',
    appId: '1:999694524235:web:9d651c95dc99849c0dd2ce',
    measurementId: 'G-BLNE8FWGCF'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

const db = firebase.firestore()

export default db