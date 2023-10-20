export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  toggleTask?: Maybe<Task>;
};


export type MutationToggleTaskArgs = {
  toggleTaskInput: ToggleTaskInput;
};

export type Query = {
  __typename?: 'Query';
  tasks: Array<Task>;
  taskGroups: Array<TaskGroup>;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['Int'];
  groupId: Scalars['Int'];
  task: Scalars['String'];
  dependencyIds: Array<Maybe<Scalars['Int']>>;
  completedAt?: Maybe<Scalars['String']>;
};

export type TaskGroup = {
  __typename?: 'TaskGroup';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ToggleTaskInput = {
  taskId: Scalars['Int'];
  completed: Scalars['Boolean'];
};
