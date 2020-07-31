import firebase from 'firebase';
const firebaseConfig={
  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

export  let firebaseApp = firebase.initializeApp(firebaseConfig);
let database = firebaseApp.database();
export let testDB =()=>{
  console.log( process.env.REACT_APP_API_KEY);
database.ref('users/' + 3 ).set({ 
userName:'name2',
    email:'email2', 
})
}
