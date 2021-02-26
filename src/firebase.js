import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDyHC-cKQ9b5TuRIqYn8fsPUuw6NGCpGGc",
    authDomain: "crud-9fdec.firebaseapp.com",
    projectId: "crud-9fdec",
    storageBucket: "crud-9fdec.appspot.com",
    messagingSenderId: "920562753097",
    appId: "1:920562753097:web:9a977118ea95b159686998"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)