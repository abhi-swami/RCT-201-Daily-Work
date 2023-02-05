import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./Todos/todoReducer";
import { inputReducer } from "./InputTodos/InputReducer";
import { deleteRuducer } from "./DeleteTodos/deleteReducer";
import { toggleReducer } from "./Toggle/toggleReducer";

const customMiddleWare=(store)=>(next)=>(action)=>{
    if(typeof action==="function"){
        return action(store.dispatch)
    }
    return next(action);
}

const rootRuducer = combineReducers({
  todo: todoReducer,
  input:inputReducer,
  delete:deleteRuducer,
  toggle:toggleReducer,
});

export const store = legacy_createStore(rootRuducer,applyMiddleware(customMiddleWare));
