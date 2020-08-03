import { IProfile } from "./types"

export const profileActions={
  setUserProfileAC :(profile :IProfile) => {
      return({type : 'SET-PROFILE' , payload: profile} as const)
  } ,
  
  setUserStatusAC :(status:string) => {
      return({type : 'SET-USER-STATUS' , payload: status} as const)
  } ,
  
  setUserName :(name:string) => { 
      console.log("User name (action ) : " + name);
      return({type : 'SET-USER-NAME' , payload: name} as const)
  } ,
  
  setUserSurname :(surname:string) => {
      return({type : 'SET-USER-SURNAME' , payload: surname} as const)
  } ,
  
  setUserPhoto :(photo:string) => {
      return({type : 'SET-USER-PHOTO' , payload: photo} as const)
  } ,

  setUserDescription :(description:string) => {
      return({type : 'SET-USER-DESCRIPTION' , payload: description} as const)
  } ,
  
 clearProfileData :() => {
      return({type : 'CLEAR-PROFILE-DATA'} as const)
  } ,
  
  
} 