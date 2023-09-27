import React from 'react';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button } from 'antd';

import './index.scss';
import { useDispatch } from '../../../../store/store';
import { removeTodo } from '../../../../slices/todoSlice';

const TodoItemHeaderViewComponent = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item-header">
      <Button>
        <EditTwoTone />
      </Button>
      <Button onClick={() => dispatch(removeTodo(id))}>
        <DeleteTwoTone />
      </Button>
    </div>
  );
};

export default TodoItemHeaderViewComponent;
