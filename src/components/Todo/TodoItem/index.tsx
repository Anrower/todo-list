import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';
import moment from 'moment';
import TodoItemHeaderView from './HeaderView';
import { TodoItemType } from '../../../models/Todo';
import './index.scss';
import { updateTodo } from '../../../slices/todoSlice';
import { useDispatch } from '../../../store/store';

const { TextArea } = Input;

const TodoItemComponent = ({ todoItem }: { todoItem: TodoItemType }) => {
  const {
    id,
    isEdit,
    description: defaultDescription,
    creationDate,
  } = todoItem;
  const [description, setDescription] = useState(defaultDescription);
  const dispatch = useDispatch();

  const convertDate = (date: string) => {
    const momentDate = moment(date);

    return momentDate.format('DD MMM YYYY HH:mm');
  };
  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id,
        description,
        creationDate,
        isEdit: false,
      }),
    );
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <Card
      extra={<TodoItemHeaderView {...todoItem} />}
      style={{ width: 300 }}
      title={`${convertDate(creationDate)}`}
    >
      {isEdit ? (
        <div className="todo-item-edit-view">
          <TextArea onChange={handleChange} value={description} />
          <Button onClick={handleUpdate} type="primary">
            Save
          </Button>
        </div>
      ) : (
        <p>{description}</p>
      )}
    </Card>
  );
};

export default TodoItemComponent;
