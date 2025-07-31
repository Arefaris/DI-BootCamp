import { TaskContext } from "../App";
import { useContext } from "react";
import { ACTION_REMOVE_TASK } from "../App";

function TaskRemove({ id }) {
  const { dispatch } = useContext(TaskContext);
  return (
    <button onClick={() => dispatch({ type: ACTION_REMOVE_TASK, id })}>
      {" "}
      X{" "}
    </button>
  );
}

export default TaskRemove;
