// NOTE: DO NOT MODIFY the intial state structure in this file.

import {
  GET_SHOES_DATA_REQUEST,
  GET_SHOES_DATA_SUCCESS,
  GET_SHOES_DATA_FAILURE,
} from "./actionType";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOES_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SHOES_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        shoes: action.payload,
      };
    }
    case GET_SHOES_DATA_FAILURE: {
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

export { reducer };
