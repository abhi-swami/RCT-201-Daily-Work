import {
  PATCH_TODO_REQUEST,
  PATCH_TODO_SUCCESS,
  PATCH_TODO_ERROR,
} from "./toggleActionType";

const initial = {
  id: {},
  isLoading: false,
  isError: false,
};

export const toggleReducer = (state = initial, action) => {
  switch (action.type) {
    case PATCH_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        id: action.paylaod,
      };
    }
    case PATCH_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PATCH_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
