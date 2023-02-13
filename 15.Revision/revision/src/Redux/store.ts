
import { legacy_createStore,combineReducers,applyMiddleware } from 'redux'
import { appReducer } from './App/appReducer'
import { authReducer } from './Auth/authReducer'
import thunk from 'redux-thunk'
import { useSelector,useDispatch,TypedUseSelectorHook } from 'react-redux'




const rootReducer=combineReducers({appReducer,authReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType  <typeof store.getState>

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector

