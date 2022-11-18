import axios from "axios";
import { URL } from "src/constants";

const getAllTodos = () => axios.get(`${URL}/tasks`);

const deleteOneTask = (_id) => axios.delete(`${URL}/tasks/${_id}`);

const addOneTask = (text) =>
  axios.post(`${URL}/tasks`, {
    text,
  });

const changeTextTask = (_id, text) =>
  axios.patch(`${URL}/tasks/${_id}/text`, {
    text,
  });

const changeCheckboxTask = (_id, isCheck) =>
  axios.patch(`${URL}/tasks/${_id}/checkbox`, {
    isCheck,
  });

const deleteAllTodos = () => axios.delete(`${URL}/tasks`);

export {
  getAllTodos,
  deleteAllTodos,
  deleteOneTask,
  addOneTask,
  changeCheckboxTask,
  changeTextTask,
};
