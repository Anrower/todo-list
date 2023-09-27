export type TodoItemType = {
  id: string;
  description: string;
  creationDate: string;
  isEdit: boolean;
};

export type TodoStateType = {
  todoList: TodoItemType[];
};
