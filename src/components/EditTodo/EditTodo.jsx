import { useState } from "react";
import saveTaskImg from "src/svg/save.svg";
import cancelTaskImg from "src/svg/cancel.svg";

const EditTodo = ({ task, saveTask, cancelTaskEditing }) => {
  const [valueInput, setValueInput] = useState(task.text);

  return (
    <li className="task">
      <input
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <div>
        <button type="button" onClick={() => saveTask(valueInput)}>
          <img src={saveTaskImg} className="img-button" alt="Save" />
        </button>
        <button type="button" onClick={cancelTaskEditing}>
          <img src={cancelTaskImg} className="img-button" alt="Cancel" />
        </button>
      </div>
    </li>
  );
};

export default EditTodo;
