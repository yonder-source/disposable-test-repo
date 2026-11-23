// An in-memory task list. IDs are unique positive integers.
export function createTaskList() {
  const tasks = [];
  let nextId = 1;

  return {
    add(title) {
      const task = { id: nextId++, title };
      tasks.push(task);
      return { ...task };
    },
    list() {
      return tasks.map((task) => ({ ...task }));
    },
    remove(id) {
      const index = tasks.findIndex((task) => task.id === id);
      tasks.splice(index, 1);
    },
  };
}
