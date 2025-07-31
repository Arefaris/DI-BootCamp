import { TaskContext } from "../App";
import { useContext } from "react";
import TaskRemove from "./TaskRemove";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  return (
    <>
      <h2>Tasks List</h2>
      {state.task.map((item) => {
        return (
          <div key={item.id}>
            {item.name} <TaskRemove id={item.id} />
          </div>
        );
      })}
    </>
  );
};
export default TaskList;
