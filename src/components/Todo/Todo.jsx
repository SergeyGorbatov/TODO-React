import { useState } from "react";
import TodoItem from "src/components/TodoItem/TodoItem";
import EditTodo from "src/components/EditTodo/EditTodo";

const Todo = ({ task, saveOneTask, removeOneTask, completeOneTask }) => {
  const [buttonIdEditTask, setButtonIdEditTask] = useState("");

  const editTask = () => {
    setButtonIdEditTask(task._id);
  };

  const deleteTask = () => {
    removeOneTask(task._id);
  };

  const saveTask = (valueInput) => {
    if (valueInput.trim() === "") {
      alert("Поле не должно быть пустым");
      return;
    }
    saveOneTask(task._id, valueInput);
    setButtonIdEditTask("");
  };

  const onChangeCheckbox = () => {
    completeOneTask(task._id, task.isCheck);
  };

  const cancelTaskEditing = () => {
    setButtonIdEditTask("");
  };

  return buttonIdEditTask === task._id ? (
    <EditTodo
      task={task}
      key={task._id}
      saveTask={saveTask}
      cancelTaskEditing={cancelTaskEditing}
    />
  ) : (
    <TodoItem
      task={task}
      key={task._id}
      deleteTask={deleteTask}
      onChangeCheckbox={onChangeCheckbox}
      editTask={editTask}
    />
  );
};

export default Todo;
