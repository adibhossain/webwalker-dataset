import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDbI0U30mu-aarveIXyRAZC3MzbAS6xSvg",
    authDomain: "webwalker-dataset.firebaseapp.com",
    projectId: "webwalker-dataset",
    storageBucket: "webwalker-dataset.appspot.com",
    messagingSenderId: "30894506177",
    appId: "1:30894506177:web:bc057b47d81e52f70d9440"
  }

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'test')

getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })