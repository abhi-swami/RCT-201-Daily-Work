import { DEC, INC } from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case INC:{
        return{
            ...state,count:state.count+action.payload
        }
    }
    case DEC:{
        return{
            ...state,count:state.count+action.payload
        }
    }
    default: {
      return state;
    }
  }
};
