import { profileActionsType, profileInitialStateType, IProfile, ProfileThunkType } from "./types"
import { setUserNameAPI, setUserProfileAPI, setUserSurnameAPI, setUserImageAPI, setUserStatusAPI, setUserDescriptionAPI } from "../../../api/api"
import { profileActions } from "./actions"
import { toast } from "react-toastify"
import { Dispatch } from "redux"

export const initialState={
  profile  :{
    photo:'',
    name:'',
    surname :'',
    description:''
  } as IProfile
  
}
const profileReducer =(state = initialState ,  action : profileActionsType):profileInitialStateType=>{
  switch(action.type){
    case 'SET-PROFILE':
      return{...state ,profile:action.payload}
    case'SET-USER-NAME':
    return{...state , profile: {...state.profile , name: action.payload}}
     
    case'SET-USER-SURNAME':
    return{...state , profile: {...state.profile , surname: action.payload}}
     
    case'SET-USER-PHOTO':
    return{...state , profile: {...state.profile , photo: action.payload}}
    case 'SET-USER-DESCRIPTION':
      return{...state , profile: {...state.profile , description: action.payload}}
      case 'CLEAR-PROFILE-DATA':
        return{...initialState}
    default: 
    return state
  }
}

export const setUserName = (name:string):ProfileThunkType=>{
  return async(dispatch)=>{
    setUserNameAPI(name).then(response=>{
      dispatch(profileActions.setUserName(name))
    }).catch(error=>{toast(error.message)})
  }
}
export const setUserDescription=(description:string):ProfileThunkType=>{
  return async(dispatch)=>{
    setUserDescriptionAPI(description).then(response=>{
      dispatch(profileActions.setUserDescription(description))
    }).catch(error=>{toast(error.message)})
  }
}

export const setUserSurname = (surname:string):ProfileThunkType=>{
  return async(dispatch)=>{
    setUserSurnameAPI(surname).then(response=>{
      dispatch(profileActions.setUserSurname(surname))
    }).catch(error=>{toast(error.message)})
  }
}

export const setUserImage = (image:string):ProfileThunkType=>{
  return async(dispatch)=>{
    setUserImageAPI(image).then(response=>{
      dispatch(profileActions.setUserPhoto(image))
    }).catch(error=>{toast(error.message)})
  }
}

export const clearProfileData = () => {
  return (dispatch: Dispatch) => {
  dispatch(profileActions.clearProfileData())
  }
}

export const getUserProfile = ():ProfileThunkType=>{
  return async(dispatch)=>{
    setUserProfileAPI().then(function(snapshot){
        const user = snapshot.val();
        if(user === null )
        {
        setUserName('')
        setUserSurname('')
        setUserImage('')
        setUserDescription('')
      }
      else{        
        dispatch(profileActions.setUserPhoto(user.image))
        dispatch(profileActions.setUserName(user.name))
        dispatch(profileActions.setUserSurname(user.surname))
        dispatch(profileActions.setUserDescription(user.description))
      }
        // for(const item of Object.values(snapshot.val())){
        //       console.log("item value - " + item)
        //       dispatch(profileActions.setUserPhoto(item as string))
        //       dispatch(profileActions.setUserName(item as string ))
        //       dispatch(profileActions.setUserSurname(item as string ))
        // }
    
      }
    )
      // dispatch(profileActions.setUserName(name))
      }
}
  

export default profileReducer;