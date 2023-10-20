import {TaskGroupModel, TaskModel} from '../../models/TaskModel'
import { wait } from '../../utils'

let TASK_GROUP: TaskGroupModel[] = [
  {id: 1, name: "Purchases"},
  {id: 2, name: "Build Airplane"},
  {id: 3, name: "Learn GPL"}
];

let TASK_GROUP_LOOKUP: Record<number, number[]> = {
  1: [1, 2, 3,4,5],
  2: [6,7,8],
  3: [9],
};

let TASKS_LIST: TaskModel[] = [
  {
    id: 1,
    groupId: 1,
    task: "Go to the bank",
    dependencyIds: [],
    completedAt: null
  },
  {
    id: 2,
    groupId: 1,
    task: "Buy hammer",
    dependencyIds: [
      1
    ],
    completedAt: null
  },
  {
    id: 3,
    groupId: 1,
    task: "Buy wood",
    dependencyIds: [
      1
    ],
    completedAt: null
  },
  {
    id: 4,
    groupId: 1,
    task: "Buy nails",
    dependencyIds: [
      1
    ],
    completedAt: null
  },
  {
    id: 5,
    groupId: 1,
    task: "Buy paint",
    dependencyIds: [
      1
    ],
    completedAt: null
  },
  {
    id: 6,
    groupId: 2,
    task: "Hammer nails into wood",
    dependencyIds: [
      2,
      3,
      4
    ],
    completedAt: null
  },
  {
    id: 7,
    groupId: 2,
    task: "Paint wings",
    dependencyIds: [
      5,
      6
    ],
    completedAt: null
  },
  {
    id: 8,
    groupId: 2,
    task: "Have a snack",
    dependencyIds: [],
    completedAt: null
  },
  {
    id: 9,
    groupId: 3,
    task: "Build a QGL server",
    dependencyIds: [],
    completedAt: "2021-08-04"
  }
]

export class TasksData {
  taskGroups: TaskGroupModel[] = [];
  tasks:  Map<number, TaskModel> = new Map()

  constructor() {
    this.load()
  }

  load(): void {
    this.taskGroups = TASK_GROUP;
    TASKS_LIST.forEach((task) => {
      this.tasks.set(task.id, task);
    });
  }

  async getTasks(): Promise<TaskModel[]> {
    const tasks = Array.from(this.tasks.values())
    return wait(500).then(() => tasks)
  }

  async toggleTask(taskId: number, completed: boolean): Promise<TaskModel> {
    if (!this.tasks.has(taskId)) throw new Error("task not found")
    const task = this.tasks.get(taskId)! // we know that this entity is available
    this.tasks.set(taskId, {...task, completedAt: completed ? new Date().toDateString() : null})
    return wait(100).then(() => this.tasks.get(taskId)!)
  }

  async getTaskGroups(): Promise<TaskGroupModel[]> {
    return wait(100).then(() => this.taskGroups)
  }

  async getTasksByGroup(id: number): Promise<TaskModel[]> {

    // TODO: load this in memory inside the class bu tfor now i will hack it
    const taskToGroupRelation = TASK_GROUP_LOOKUP[id];
    if (!taskToGroupRelation?.length) {
      // TODO: handle the case no relation exists
    }

    // TODO: handle a case no task is found, for now, we will make a null assertion for hack
    const tasks = taskToGroupRelation.map(taskId => this.tasks.get(taskId)!)
    return wait(100).then(() => tasks)
  }
}
