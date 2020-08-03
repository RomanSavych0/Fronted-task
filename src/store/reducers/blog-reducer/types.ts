import { initialState } from "./blog-reducer";
import { InfrerActionsTypes, AppStateType } from "../../redux-store";
import { blogActions } from "./actions";
import { ThunkAction } from "redux-thunk";

export interface IBlog{
  image:string;
  title:string;
}
export type blogInitialStateType = typeof initialState; 
export type blogActionType = InfrerActionsTypes<typeof blogActions>
export type BlogThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  blogActionType
>