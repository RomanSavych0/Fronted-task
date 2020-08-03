import firebase from 'firebase';
import { IProfile } from '../store/reducers/profile-reducer/types';
import { IBlog } from '../store/reducers/blog-reducer/types';
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

export const authMeAPI = (
  userEmail: string,
  userPassword: string,
): Promise<any> => {
  return firebaseApp.auth().signInWithEmailAndPassword(userEmail, userPassword)
}
export const registerAPI = (
  userEmail: string,
  userPassword: string,
): Promise<any> => {
  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPassword)
}

export const signOutAPI = (): Promise<any> => {
  return firebaseApp.auth().signOut()
}

export const setUserNameAPI=(name:string)=>{
return database.ref('users/' + localStorage.getItem('userId') +'/profile').update({
  name:name 
})
}

export const setUserSurnameAPI=(surname:string)=>{
return database.ref('users/' + localStorage.getItem('userId')+'/profile').update({
  surname:surname 
})
}

export const setUserStatusAPI=(status:string)=>{
return database.ref('users/' + localStorage.getItem('userId')+'/profile').update({
  status:status 
})
}

export const setUserDescriptionAPI=(description:string)=>{
return database.ref('users/' + localStorage.getItem('userId')+'/profile').update({
  description:description 
})
}

export const setUserImageAPI=(image:string)=>{
return database.ref('users/' + localStorage.getItem('userId')+'/profile').update({
  image:image 
})
}
export const setUserProfileAPI=()=>{
  return database.ref('users/' + localStorage.getItem('userId')  +'/profile').once('value')
}
export const addBlogAPI= (blog:IBlog)=>{
return database.ref('users/' + localStorage.getItem('userId')+'/blogs').push(blog);
}
export const getBlogsAPI=()=>{
  return database.ref('users/' + localStorage.getItem('userId')+'/blogs').once('value');
}

