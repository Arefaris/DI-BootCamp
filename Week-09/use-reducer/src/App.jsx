import { useState, useReducer, useRef } from "react";

import "./App.css";

const initialState = {
  count: 10,
  task: [],
};
/**
 * @param state - initialState
 * @param action - {}
 */
const ACTION_INCREMENT = "increment";
const ACTION_DECREMENT = "decrement";
const ACTION_API = "call_api";
const ACTION_WITH_NUM = "with_num";

const counterReducer = (state, action) => {
  console.log(action);
  if (action?.type === ACTION_INCREMENT) {
    // add your own logic
    return { ...state, count: state.count + 1 };
  } else if (action?.type === ACTION_DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else if (action?.type === ACTION_API) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === ACTION_WITH_NUM) {
    return {
      ...state,
      count: state.count + Number(action.payload.num1) + action.payload.num2,
    };
  }
  return state; // { count: prev state }
};

function App() {
  const [count, setCount] = useState(0);

  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialState
  );

  const inputRef = useRef();

  return (
    <>
      <h2>useReducer Hook</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Reducer Count: {counterState.count}</h2>
        <button onClick={() => counterDispatch({ type: ACTION_INCREMENT })}>
          {" "}
          Dispatch +1
        </button>
        <button onClick={() => counterDispatch({ type: ACTION_DECREMENT })}>
          {" "}
          Dispatch -1
        </button>
        <div>
          <input type='number' ref={inputRef} />
          <button
            onClick={() =>
              counterDispatch({
                type: ACTION_WITH_NUM,
                payload: { num1: inputRef.current.value, num2: 6 },
              })
            }
          >
            Dispatch with input number
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
