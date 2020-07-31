import { initialState } from "./message-reducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store";
export interface IMessage{
message:string
location:string 
}
export type InitialStateType = typeof initialState;
export enum ActionType{
  SET_MESSAGE = 'SET_MESSAGE'
}
 interface setMessageType{
  type:ActionType.SET_MESSAGE , payload:IMessage  
}
export type ActionsTypes = setMessageType;

export type AuthThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>