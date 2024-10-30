import { Todo } from '@/graphql/model/todoSchema';

export const updateTask = async (
  _: unknown,
  { taskId, task }: { taskId: string; task: { title: string; status: 'Todo' | 'InProgress' | 'Done' } }
) => {
  try {
    const response = await Todo.findByIdAndUpdate(taskId, task, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      throw new Error(`Task with ID ${taskId} not found`);
    }

    return response;
  } catch (error) {
    throw new Error(`Failed to update the task: ${error}`);
  }
};
