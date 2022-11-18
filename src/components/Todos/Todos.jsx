import { useState, useEffect } from "react";
import Todo from "src/components/Todo/Todo";
import AddTodo from "src/components/AddTodo/AddTodo";
import DeleteAllTasks from "src/components/DeleteAllTasks/DeleteAllTasks";
import { sortAllTasks } from "src/helpers/sorting";
import {
  getAllTodos,
  addOneTask,
  deleteAllTodos,
  deleteOneTask,
  changeCheckboxTask,
  changeTextTask,
} from "src/service/taskService";
import "./style.scss";

const Todos = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const response = await getAllTodos();
      const sortTasks = sortAllTasks([...response.data]);
      setTasks(sortTasks);
    } catch (error) {
      alert("Ошибка при попытке получения всех задач");
    }
  };

  const removeOneTask = async (_id) => {
    try {
      await deleteOneTask(_id);
      const sortTasks = sortAllTasks(tasks.filter((task) => task._id !== _id));
      setTasks(sortTasks);
    } catch (error) {
      alert("Ошибка при попытке удаления задачи");
    }
  };

  const createTask = async (valueInput) => {
    try {
      const response = await addOneTask(valueInput);
      const sortTasks = sortAllTasks([response.data, ...tasks]);
      setTasks(sortTasks);
    } catch (error) {
      alert("Ошибка при попытке добавления задачи");
    }
  };

  const saveOneTask = async (_id, valueInput) => {
    try {
      const response = await changeTextTask(_id, valueInput);
      const updatedTasks = tasks.map((task) => {
        const newTask = { ...task };
        if (newTask._id === _id) {
          newTask.text = response.data.text;
          newTask.isEditMode = false;
        }
        return newTask;
      });
      const sortTasks = sortAllTasks(updatedTasks);
      setTasks(sortTasks);
    } catch (error) {
      alert("Ошибка при попытке сохранения задачи");
    }
  };

  const completeOneTask = async (_id, isCheck) => {
    try {
      const newIsCheck = !isCheck;
      const response = await changeCheckboxTask(_id, newIsCheck);
      const updatedTasks = tasks.map((task) => {
        const newTask = { ...task };
        if (newTask._id === _id) {
          newTask.isCheck = response.data.isCheck;
        }
        return newTask;
      });
      const sortTasks = sortAllTasks([...updatedTasks]);
      setTasks(sortTasks);
    } catch (error) {
      alert("Ошибка при попытке выполнения задачи");
    }
  };

  const removeAllTasks = async () => {
    try {
      await deleteAllTodos();
      setTasks([]);
    } catch (error) {
      alert("Ошибка при попытке удаления всех задач");
    }
  };

  return (
    <div className="wrapper">
      <h1>TO-DO List</h1>
      <AddTodo createTask={createTask} />
      <DeleteAllTasks removeAllTasks={removeAllTasks} />
      {tasks.length ? (
        <ul className="tasks">
          {tasks.map((task) => {
            return (
              <Todo
                task={task}
                key={task._id}
                saveOneTask={saveOneTask}
                removeOneTask={removeOneTask}
                completeOneTask={completeOneTask}
              />
            );
          })}
        </ul>
      ) : (
        <p>No tasks!</p>
      )}
    </div>
  );
};

export default Todos;
