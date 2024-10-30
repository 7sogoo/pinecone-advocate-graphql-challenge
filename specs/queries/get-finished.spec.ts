import { Todo } from '@/graphql/model/todoSchema';
import { getFinishedTasks } from '@/graphql/resolvers/queries/get-finished';

jest.mock('../../graphql/model/todoSchema', () => {
  return {
    Todo: {
      find: jest.fn(),
    },
  };
});

describe('getFinishedTasks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of finished tasks', async () => {
    const mockTasks = [
      { title: 'Finished Task 1', status: 'Done' },
      { title: 'Finished Task 2', status: 'Done' },
    ];

    (Todo.find as jest.Mock).mockResolvedValue(mockTasks);

    const result = await getFinishedTasks();

    expect(result).toEqual(mockTasks);
    expect(Todo.find).toHaveBeenCalledWith({ status: 'Done' });
    expect(Todo.find).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if fetching finished tasks fails', async () => {
    (Todo.find as jest.Mock).mockRejectedValue(new Error('Database error'));

    await expect(getFinishedTasks()).rejects.toThrow(
      'Failed to fetch finished tasks: Error: Database error'
    );
  });
});
