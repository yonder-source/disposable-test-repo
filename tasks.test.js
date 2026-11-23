import test from "node:test";
import assert from "node:assert/strict";
import { createTaskList } from "./tasks.js";

test("adds and removes a task by id", () => {
  const tasks = createTaskList();
  const first = tasks.add("First");
  const second = tasks.add("Second");
  tasks.remove(first.id);
  assert.deepEqual(tasks.list(), [second]);
});
