import {TaskGroupModel, TaskModel} from '../../models/TaskModel'
import { TasksData } from './tasksData'
import { DataSource } from 'apollo-datasource'
import {TaskGroupDetail, ToggleTaskInput} from '../../schemaTypes'

export class TasksAPI extends DataSource {
  taskData: TasksData

  constructor() {
    super()
    this.taskData = new TasksData()
  }

  getTasks(): Promise<TaskModel[]> {
    return this.taskData.getTasks()
  }

  async toggleTask(toggleTaskInput: ToggleTaskInput): Promise<TaskModel> {
    const {taskId, completed} = toggleTaskInput
    return this.taskData.toggleTask(taskId, completed);
  }

  async getTaskGroups(): Promise<TaskGroupModel[]> {
    return this.taskData.getTaskGroups();
  }

  async getTaskGroupDetail(id: number): Promise<TaskGroupDetail> {
    const taskGroup = this.taskData.taskGroups.find(group => group.id === id)
    if (!taskGroup) {
      // TODO: handle not found case
      throw new Error('Not found')
    }

    const tasksByGroup = await this.taskData.getTasks()
    const stats = tasksByGroup.reduce((acc, task) => {
      if (!task.completedAt) {
        acc.incompleteCount += acc.incompleteCount;
        return acc;
      }

      acc.completeCount += acc.completeCount;
      return acc;
    }, {
      completeCount: 0,
      incompleteCount: 0,
    })

    return {
      ...taskGroup,
      tasks: tasksByGroup,
      ...stats
    };
  }
}
