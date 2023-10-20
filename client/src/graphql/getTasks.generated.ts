import * as Types from '../schemaTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetTasksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number }> };

export type GetTaskGroupsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTaskGroupsQuery = { __typename?: 'Query', taskGroups: Array<{ __typename?: 'TaskGroup', id: number, name: string }> };


export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;
export const GetTaskGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaskGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taskGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetTaskGroupsQuery, GetTaskGroupsQueryVariables>;