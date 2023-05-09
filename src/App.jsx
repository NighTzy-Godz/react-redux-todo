import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "./store/todo";
import { useState } from "react";
import "./assets/main.css";

const App = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const renderTodo = () => {
    if (todos.length === 0) return <h1>No Todo At The Moment</h1>;
    return todos.map((todo) => {
      return (
        <li key={todo.id}>
          <div className="todo_details">
            <p className={`${todo.completed ? "done" : ""}`}> {todo.text}</p>
          </div>

          <div className="todo_btn">
            <button
              className={`${todo.completed ? "done" : ""}`}
              onClick={() => handleComplete(todo.id)}
            >
              Done
            </button>

            <i
              className="fa-solid fa-trash"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="todo_container">
      <div className="todo_body">
        <div className="todo_title">
          <h1>TaskMeter</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Add New .."
            onChange={(e) => setTask(e.currentTarget.value)}
            value={task}
          />
          <button>Add</button>
        </form>
        <ul>{renderTodo()}</ul>
      </div>
    </div>
  );
};

export default App;
