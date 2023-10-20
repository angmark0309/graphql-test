import { GraphQLResolveInfo } from 'graphql';
import { TaskModel } from './models/TaskModel';
import { GQLContext } from './GQLContext';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  taskGroup: TaskGroupDetail;
  tasks: Array<Task>;
  taskGroups: Array<TaskGroup>;
};


export type QueryTaskGroupArgs = {
  groupId: Scalars['Int'];
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

export type TaskGroupDetail = {
  __typename?: 'TaskGroupDetail';
  id: Scalars['Int'];
  name: Scalars['String'];
  tasks: Array<Task>;
  completeCount: Scalars['Int'];
  incompleteCount: Scalars['Int'];
};

export type ToggleTaskInput = {
  taskId: Scalars['Int'];
  completed: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Task: ResolverTypeWrapper<TaskModel>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TaskGroup: ResolverTypeWrapper<TaskGroup>;
  TaskGroupDetail: ResolverTypeWrapper<Omit<TaskGroupDetail, 'tasks'> & { tasks: Array<ResolversTypes['Task']> }>;
  ToggleTaskInput: ToggleTaskInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  Query: {};
  Int: Scalars['Int'];
  Task: TaskModel;
  String: Scalars['String'];
  TaskGroup: TaskGroup;
  TaskGroupDetail: Omit<TaskGroupDetail, 'tasks'> & { tasks: Array<ResolversParentTypes['Task']> };
  ToggleTaskInput: ToggleTaskInput;
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<ContextType = GQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  toggleTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationToggleTaskArgs, 'toggleTaskInput'>>;
}>;

export type QueryResolvers<ContextType = GQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  taskGroup?: Resolver<ResolversTypes['TaskGroupDetail'], ParentType, ContextType, RequireFields<QueryTaskGroupArgs, 'groupId'>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  taskGroups?: Resolver<Array<ResolversTypes['TaskGroup']>, ParentType, ContextType>;
}>;

export type TaskResolvers<ContextType = GQLContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  task?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dependencyIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskGroupResolvers<ContextType = GQLContext, ParentType extends ResolversParentTypes['TaskGroup'] = ResolversParentTypes['TaskGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskGroupDetailResolvers<ContextType = GQLContext, ParentType extends ResolversParentTypes['TaskGroupDetail'] = ResolversParentTypes['TaskGroupDetail']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  completeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  incompleteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GQLContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskGroup?: TaskGroupResolvers<ContextType>;
  TaskGroupDetail?: TaskGroupDetailResolvers<ContextType>;
}>;

