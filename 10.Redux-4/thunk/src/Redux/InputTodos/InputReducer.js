import {
  POST_TODO_ERROR,
  POST_TODO_REQUEST,
} from "./InputActionType";
const initial = {
  isLoading: false,
  isError: false,
  todo: [],
};

export const inputReducer = (state = initial, action) => {
  switch (action.type) {
    case POST_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_TODO_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};


