import {  InitialStateType, ActionType, IMessage } from "./types"
import{ActionsTypes} from "./types"
import { setMessageAction } from "./actions";
import { Dispatch } from "redux";
import {testDB} from '../../api/api'


export const initialState ={
message:'' as string,
location:''as string,
messages:[] as Array<IMessage>

}
const meessageReducer =(state = initialState , action:ActionsTypes):InitialStateType=>{
switch(action.type){
case ActionType.SET_MESSAGE:
  console.log(action.payload)
  console.log(111)

return{...state ,  messages : [...state.messages , action.payload] }
default:
  return state 
}};

export let addMessageThunk = (message:string  , location:string)=>{
  testDB();
  
  return (dispatch: Dispatch) => {
    dispatch(setMessageAction({message , location}))
}
      
  
};




export default meessageReducer;