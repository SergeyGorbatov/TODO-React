import deleteTaskImg from "src/svg/delete.svg";
import editTaskImg from "src/svg/edit.svg";
import "./style.scss";

const TodoItem = ({ task, editTask, deleteTask, onChangeCheckbox }) => {
  return (
    <li className="task">
      <span className={task.isCheck ? "task_done" : null}>
        <input
          className="task__checkbox"
          type="checkbox"
          checked={task.isCheck}
          onChange={onChangeCheckbox}
        />
        {task.text}
      </span>
      <div>
        {task.isCheck ? null : (
          <button type="button" onClick={editTask}>
            <img src={editTaskImg} className="img-button" alt="Edit" />
          </button>
        )}
        <button type="button" onClick={deleteTask}>
          <img src={deleteTaskImg} className="img-button" alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
