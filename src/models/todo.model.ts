export interface TodoStateModel {
  todoList: todoList[];
}

export interface todoList {
  id: string;
  name: string;
  completed: boolean;
}
