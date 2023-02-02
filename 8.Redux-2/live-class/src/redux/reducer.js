
const initialState={
    count:0,
}
export const reducer = (state=initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state
      };
    }
  }
};
