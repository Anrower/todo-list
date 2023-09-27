import React from 'react';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch } from '../../../../store/store';
import { removeTodo, updateTodo } from '../../../../slices/todoSlice';
import { TodoItemType } from '../../../../models/Todo';
import './index.scss';

const TodoItemHeaderView = ({
  creationDate,
  description,
  id,
  isEdit,
}: TodoItemType) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      updateTodo({
        id: creationDate,
        description,
        creationDate,
        isEdit: true,
      }),
    );
  };

  return (
    <div className="todo-item-header">
      <Button autoFocus={isEdit} onClick={handleEdit}>
        <EditTwoTone />
      </Button>
      <Button onClick={() => dispatch(removeTodo(id))}>
        <DeleteTwoTone />
      </Button>
    </div>
  );
};

export default TodoItemHeaderView;
