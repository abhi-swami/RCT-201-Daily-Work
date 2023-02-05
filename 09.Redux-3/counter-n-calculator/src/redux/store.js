import { legacy_createStore,combineReducers } from "redux";
import {calculatorReducer} from "./Calculator/calculatorReducer";
import {counterReducer} from "./Counter/CounterReducer"

const rootReducer=combineReducers({calculatorReducer,counterReducer})

export const store=legacy_createStore(rootReducer)