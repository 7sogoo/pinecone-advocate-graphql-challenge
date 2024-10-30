import { Todo } from '@/graphql/model/todoSchema';

export const getFinishedTasks = async () => {
  try {
    const response = await Todo.find({ status: 'Done' });
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch finished tasks: ${error}`);
  }
};
