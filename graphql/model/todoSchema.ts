import mongoose, { Schema, Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  status: 'Todo' | 'InProgress' | 'Done';
}

const TaskSchema: Schema = new Schema<Todo>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  status: {
    type: String,
    enum: ['Todo', 'InProgress', 'Done'],
    required: [true, 'Status is required'],
  },
}, { timestamps: true });

const todoModel = mongoose.models.Todo || mongoose.model<Todo>('todo', TaskSchema);

export { todoModel as Todo };
