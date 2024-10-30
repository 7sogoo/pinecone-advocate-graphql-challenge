import { Todo } from '@/graphql/model/todoSchema';

export const getAllTasks = async () => {
  try {
    const response = await Todo.find();
    return response;
  } catch (error) {
    throw new Error(`Failed to retrieve the task list: ${error}`);
  }
};
