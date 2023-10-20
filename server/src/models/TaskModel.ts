export interface TaskModel {
  id: number;
  groupId: number;
  task: string;
  dependencyIds: number[];
  completedAt: string | null; 
}

export interface TaskGroupModel {
  id: number;
  name: string;
}