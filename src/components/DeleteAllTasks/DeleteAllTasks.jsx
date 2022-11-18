import "./style.scss";

const DeleteAllTasks = ({ removeAllTasks }) => {
  return (
    <button
      type="button"
      onClick={removeAllTasks}
      className="clear-tasks-button"
    >
      Delete all tasks
    </button>
  );
};

export default DeleteAllTasks;
