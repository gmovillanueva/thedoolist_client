export function taskCounter(taskCount) {
  if (taskCount === 0 || taskCount > 1) {
    return `${taskCount} items left`;
  }
  return `${taskCount} item left`;
}
