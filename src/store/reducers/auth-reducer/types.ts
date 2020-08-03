import { initialState } from './auth-reducer'
import { authActions } from './actions'
import { ThunkAction } from 'redux-thunk'
import { InfrerActionsTypes, AppStateType } from '../../redux-store'
export type authInitialStateType = typeof initialState

export type authActionsTypes = InfrerActionsTypes<typeof authActions>
export type AuthThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  authActionsTypes
>
