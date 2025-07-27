import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        onClick={() => dispatch(toggleTodo(todo.id))}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;