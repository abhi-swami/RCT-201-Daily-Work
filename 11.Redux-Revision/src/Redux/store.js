import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { legacy_createStore,combineReducers, applyMiddleware } from "redux";


// NOTE: use this store variable to create a store.

const rootRedure=combineReducers({AppReducer,AuthReducer});

const customMiddleWare=(store)=>(next)=>(action)=>{
  if(typeof action==="function"){
      return action(store.dispatch)
  }
  return next(action);
}
const store = legacy_createStore(rootRedure,applyMiddleware(customMiddleWare));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
