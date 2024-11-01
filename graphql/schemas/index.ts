import { gql } from 'graphql-tag';

export const typeDefs = gql`
  enum StatusType {
    Todo
    InProgress
    Done
  }
  
  type Task {
    id: ID!
    status: StatusType!
    title: String
  }
  
  input TaskInput {
    status: StatusType!
    title: String
  }
  
  input UpdateTaskInput {
    status: StatusType!
    title: String
  }
  
  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getDoneTasks: [Task!]!
  }
  
  type Mutation {
    sayHello(name: String!): String
    addTask(task: TaskInput!): Task!
    updateTask(taskId: ID!, task: UpdateTaskInput!): Task!
  }
`;
