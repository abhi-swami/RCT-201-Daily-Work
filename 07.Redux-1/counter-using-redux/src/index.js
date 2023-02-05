import { store } from "./redux/store.js";
import { increment,decrement } from "./redux/action.js";


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState())