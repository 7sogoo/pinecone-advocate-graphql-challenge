import { addTask } from "./mutations/add-task";
import { sayHello } from "./mutations/say-hello";
import { updateTask } from "./mutations/update-task";
import { getFinishedTasks } from "./queries/get-finished";
import { getAllTasks } from "./queries/get-tasks";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getFinishedTasks
  },
  Mutation: {
    sayHello,
    updateTask,
    addTask
  },
};
