import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import authReducer from './reducers/auth-reducer/auth-reducer'
import profileReducer from './reducers/profile-reducer/profile-reducer'
import blogReducer from './reducers/blog-reducer/blog-reducer'
const rootReducer = combineReducers({
  auth:authReducer,
  profile: profileReducer,
  form: formReducer,
  blogs:blogReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InfrerActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)
// @ts-ignore
window.store = store

// @ts-ignore
export default store
