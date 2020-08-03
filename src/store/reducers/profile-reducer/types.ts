import { ThunkAction } from 'redux-thunk'
import { initialState } from './profile-reducer'
import { profileActions } from './actions'
import { InfrerActionsTypes, AppStateType } from '../../redux-store'
export type profileInitialStateType = typeof initialState;
export type profileActionsType = InfrerActionsTypes< typeof profileActions>;
export  interface IProfile{
  photo:string,
  name:string,
  surname :string,
  description:string 
}

export type ProfileThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  profileActionsType
>
