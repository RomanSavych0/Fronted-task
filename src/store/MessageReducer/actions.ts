import { ActionsTypes, IMessage, ActionType } from "./types"

export const setMessageAction = (message:IMessage):ActionsTypes=>{
  console.log(1);
  
return({type :ActionType.SET_MESSAGE , payload:message})
}