import { useDispatch, useSelector } from "react-redux";
// import { ACTION_DECREMENT, ACTION_INCREMENT } from "../redux/actions";
import { add, minus } from "../redux/actions";
function Counter() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(add())}> + </button>
      <button onClick={() => dispatch(minus())}> - </button>
    </>
  );
}

export default Counter;
