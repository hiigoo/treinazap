import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyC7bN-fFO026mCR--H4BMh-3p9akM5iFrQ",
    authDomain: "carlostreina-5e7ee.firebaseapp.com",
    projectId: "carlostreina-5e7ee",
    storageBucket: "carlostreina-5e7ee.appspot.com",
    messagingSenderId: "387815942871",
    appId: "1:387815942871:web:5a8b2e6b567630ede69e92",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
