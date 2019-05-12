module.exports = {
        typeDefs: /* GraphQL */ `type AggregateToDo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createToDo(data: ToDoCreateInput!): ToDo!
  updateToDo(data: ToDoUpdateInput!, where: ToDoWhereUniqueInput!): ToDo
  updateManyToDoes(data: ToDoUpdateManyMutationInput!, where: ToDoWhereInput): BatchPayload!
  upsertToDo(where: ToDoWhereUniqueInput!, create: ToDoCreateInput!, update: ToDoUpdateInput!): ToDo!
  deleteToDo(where: ToDoWhereUniqueInput!): ToDo
  deleteManyToDoes(where: ToDoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  toDo(where: ToDoWhereUniqueInput!): ToDo
  toDoes(where: ToDoWhereInput, orderBy: ToDoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ToDo]!
  toDoesConnection(where: ToDoWhereInput, orderBy: ToDoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ToDoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  toDo(where: ToDoSubscriptionWhereInput): ToDoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type ToDo {
  id: ID!
  createdAt: DateTime!
  parent: ToDo
  todo: String!
  completed: Boolean!
  createdBy: User!
}

type ToDoConnection {
  pageInfo: PageInfo!
  edges: [ToDoEdge]!
  aggregate: AggregateToDo!
}

input ToDoCreateInput {
  parent: ToDoCreateOneWithoutParentInput
  todo: String!
  completed: Boolean!
  createdBy: UserCreateOneWithoutTodosInput!
}

input ToDoCreateManyWithoutCreatedByInput {
  create: [ToDoCreateWithoutCreatedByInput!]
  connect: [ToDoWhereUniqueInput!]
}

input ToDoCreateOneWithoutParentInput {
  create: ToDoCreateWithoutParentInput
  connect: ToDoWhereUniqueInput
}

input ToDoCreateWithoutCreatedByInput {
  parent: ToDoCreateOneWithoutParentInput
  todo: String!
  completed: Boolean!
}

input ToDoCreateWithoutParentInput {
  todo: String!
  completed: Boolean!
  createdBy: UserCreateOneWithoutTodosInput!
}

type ToDoEdge {
  node: ToDo!
  cursor: String!
}

enum ToDoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  todo_ASC
  todo_DESC
  completed_ASC
  completed_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ToDoPreviousValues {
  id: ID!
  createdAt: DateTime!
  todo: String!
  completed: Boolean!
}

input ToDoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  todo: String
  todo_not: String
  todo_in: [String!]
  todo_not_in: [String!]
  todo_lt: String
  todo_lte: String
  todo_gt: String
  todo_gte: String
  todo_contains: String
  todo_not_contains: String
  todo_starts_with: String
  todo_not_starts_with: String
  todo_ends_with: String
  todo_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [ToDoScalarWhereInput!]
  OR: [ToDoScalarWhereInput!]
  NOT: [ToDoScalarWhereInput!]
}

type ToDoSubscriptionPayload {
  mutation: MutationType!
  node: ToDo
  updatedFields: [String!]
  previousValues: ToDoPreviousValues
}

input ToDoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ToDoWhereInput
  AND: [ToDoSubscriptionWhereInput!]
  OR: [ToDoSubscriptionWhereInput!]
  NOT: [ToDoSubscriptionWhereInput!]
}

input ToDoUpdateInput {
  parent: ToDoUpdateOneWithoutParentInput
  todo: String
  completed: Boolean
  createdBy: UserUpdateOneRequiredWithoutTodosInput
}

input ToDoUpdateManyDataInput {
  todo: String
  completed: Boolean
}

input ToDoUpdateManyMutationInput {
  todo: String
  completed: Boolean
}

input ToDoUpdateManyWithoutCreatedByInput {
  create: [ToDoCreateWithoutCreatedByInput!]
  delete: [ToDoWhereUniqueInput!]
  connect: [ToDoWhereUniqueInput!]
  disconnect: [ToDoWhereUniqueInput!]
  update: [ToDoUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ToDoUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [ToDoScalarWhereInput!]
  updateMany: [ToDoUpdateManyWithWhereNestedInput!]
}

input ToDoUpdateManyWithWhereNestedInput {
  where: ToDoScalarWhereInput!
  data: ToDoUpdateManyDataInput!
}

input ToDoUpdateOneWithoutParentInput {
  create: ToDoCreateWithoutParentInput
  update: ToDoUpdateWithoutParentDataInput
  upsert: ToDoUpsertWithoutParentInput
  delete: Boolean
  disconnect: Boolean
  connect: ToDoWhereUniqueInput
}

input ToDoUpdateWithoutCreatedByDataInput {
  parent: ToDoUpdateOneWithoutParentInput
  todo: String
  completed: Boolean
}

input ToDoUpdateWithoutParentDataInput {
  todo: String
  completed: Boolean
  createdBy: UserUpdateOneRequiredWithoutTodosInput
}

input ToDoUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ToDoWhereUniqueInput!
  data: ToDoUpdateWithoutCreatedByDataInput!
}

input ToDoUpsertWithoutParentInput {
  update: ToDoUpdateWithoutParentDataInput!
  create: ToDoCreateWithoutParentInput!
}

input ToDoUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ToDoWhereUniqueInput!
  update: ToDoUpdateWithoutCreatedByDataInput!
  create: ToDoCreateWithoutCreatedByInput!
}

input ToDoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  parent: ToDoWhereInput
  todo: String
  todo_not: String
  todo_in: [String!]
  todo_not_in: [String!]
  todo_lt: String
  todo_lte: String
  todo_gt: String
  todo_gte: String
  todo_contains: String
  todo_not_contains: String
  todo_starts_with: String
  todo_not_starts_with: String
  todo_ends_with: String
  todo_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  createdBy: UserWhereInput
  AND: [ToDoWhereInput!]
  OR: [ToDoWhereInput!]
  NOT: [ToDoWhereInput!]
}

input ToDoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  todos(where: ToDoWhereInput, orderBy: ToDoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ToDo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  todos: ToDoCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTodosInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  todos: ToDoUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTodosDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  todos_every: ToDoWhereInput
  todos_some: ToDoWhereInput
  todos_none: ToDoWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    