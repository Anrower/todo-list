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
    isEdit,
    description: defaultDescription,
    creationDate,
    isDone,
  } = todoItem;
  const [description, setDescription] = useState(defaultDescription);
  const dispatch = useDispatch();
  const taskDescriptionStyle = isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

  const convertDate = (date: string) => {
    const momentDate = moment(date);

    return momentDate.format('DD MMM YYYY HH:mm');
  };

  const handleUpdate = (field: keyof TodoItemType, value: TodoItemType[keyof TodoItemType]) => {
    dispatch(
      updateTodo({
        ...todoItem,
        [field]: value,
      }),
    );
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <Card
      extra={<TodoItemHeaderView handleUpdate={handleUpdate} todoItem={todoItem} />}
      style={{ width: 300 }}
      title={`${convertDate(creationDate)}`}
    >
      {isEdit ? (
        <div className="todo-item-edit-view">
          <TextArea onChange={handleChange} value={description} />
          <Button onClick={() => handleUpdate('isEdit', false)} type="primary">
            Save
          </Button>
        </div>
      ) : (
        <p className="task-description" onClick={() => handleUpdate('isDone', !isDone)} style={taskDescriptionStyle}>
          {description}
        </p>
      )}
    </Card>
  );
};

export default TodoItemComponent;
