import { ACTION_DECREMENT, ACTION_INCREMENT } from "./actions";

const initialState = {
  count: 11,
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === ACTION_INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === ACTION_DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  return state;
};
