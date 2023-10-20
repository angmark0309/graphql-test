import {MutationResolvers, QueryResolvers, Resolvers, ResolversTypes, TaskGroupDetail} from '../schemaTypes'
import {TaskModel} from "../models/TaskModel";

export const taskResolver: Resolvers["Task"] = {}

export const tasksQueryResolvers: QueryResolvers = {
  tasks: async (_parent, _args, context) => context.dataSources.tasksAPI.getTasks(),
  taskGroups: async (_parent, _args, context) => context.dataSources.tasksAPI.getTaskGroups(),
  taskGroup: async (_parent, {groupId}, context) => {
    return await context.dataSources.tasksAPI.getTaskGroupDetail(groupId) as ResolversTypes['TaskGroupDetail']
  },
}

export const tasksMutationResolvers: MutationResolvers = {
  toggleTask: async (_parent, { toggleTaskInput }, context) => {
    try {
      return await context.dataSources.tasksAPI.toggleTask(toggleTaskInput)
    } catch (e) {
      console.error(e) // I assume console.error is reassigned to log and trace
      // TODO: I know that i need to return a proper error and define that in the graphql schema but the time is very little
      return {} as TaskModel
    }
  }
}
