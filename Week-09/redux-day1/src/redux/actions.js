export const ACTION_INCREMENT = "increment";
export const ACTION_DECREMENT = "decrement";

export const add = () => {
  return {
    type: ACTION_INCREMENT,
  };
};

export const minus = () => {
  return {
    type: ACTION_DECREMENT,
  };
};
