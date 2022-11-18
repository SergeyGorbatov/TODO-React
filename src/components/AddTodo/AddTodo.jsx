import { useState } from "react";
import "./style.scss";

const AddTodo = ({ createTask }) => {
  const [valueInput, setValueInput] = useState("");

  const addTask = () => {
    if (valueInput.trim() === "") {
      alert("Поле не должно быть пустым");
      return;
    }
    createTask(valueInput);
    setValueInput("");
  };

  return (
    <form className="user-input-field">
      <input
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add task
      </button>
    </form>
  );
};

export default AddTodo;
