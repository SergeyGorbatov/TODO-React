export const sortAllTasks = (tasks) => {
  const newTasks = [...tasks].sort((task, nextTask) => {
    if (task.isCheck === nextTask.isCheck) {
      return 0;
    }

    if (task.isCheck) {
      return 1;
    }

    return -1;
  });

  return newTasks;
};
