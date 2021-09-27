import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmrQKOUHkhD7Q-v1ghxrWjmwvPLPRikQk',
  authDomain: 'la-casa-de-tesoro.firebaseapp.com',
  projectId: 'la-casa-de-tesoro',
  storageBucket: 'la-casa-de-tesoro.appspot.com',
  messagingSenderId: '749398179945',
  appId: '1:749398179945:web:86d82f2b49c8ca92ec22f8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
