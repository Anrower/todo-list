import React from 'react';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch } from '../../../../store/store';
import { removeTodo } from '../../../../slices/todoSlice';
import { TodoItemType } from '../../../../models/Todo';
import './index.scss';

type TodoItemHeaderViewProps = {
  todoItem:TodoItemType;
  handleUpdate: (field: keyof TodoItemType, value: TodoItemType[keyof TodoItemType]) => void;
};

const TodoItemHeaderView = ({
  todoItem,
  handleUpdate,
}: TodoItemHeaderViewProps) => {
  const { id, isDone } = todoItem;
  const dispatch = useDispatch();

  return (
    <div className="todo-item-header">
      <Button disabled={isDone} onClick={() => handleUpdate('isEdit', true)}>
        <EditTwoTone />
      </Button>
      <Button onClick={() => dispatch(removeTodo(id))}>
        <DeleteTwoTone />
      </Button>
    </div>
  );
};

export default TodoItemHeaderView;
