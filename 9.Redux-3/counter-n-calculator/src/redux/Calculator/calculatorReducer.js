import { CANCEL, EVALUATE } from "./calculatorActionType";

const initialState = {
  res: 0,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVALUATE: {
      return {
        ...state,
        res: eval(action.payload),
      };
    }
    case CANCEL: {
      return {
        ...state,
        res: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
