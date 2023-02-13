import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import thunk from "redux-thunk";

import {reducer as AppReducer} from "./App/app.reducer"
import {reducer as AuthReducer} from './Auth/auth.reducer'

const rootReducer=combineReducers({AppReducer,AuthReducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));



export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType  <typeof store.getState>

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector

