export type TodoItemType = {
  id: string;
  description: string;
  creationDate: string;
};

export type TodoStateType = {
  todoList: TodoItemType[];
};
