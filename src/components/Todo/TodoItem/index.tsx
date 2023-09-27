import React from 'react';
import { Button, Card } from 'antd';
import moment from 'moment';
import TodoItemHeaderViewComponent from './TodoItemHeaderView';

export type TodoItemPropsType = {
  id: string;
  creationDate: string;
  description: string;
  index: number;
};

const TodoItemComponent = ({
  creationDate,
  description,
  index,
  id,
}: TodoItemPropsType) => {
  const shiftIndex = 1;

  const convertDate = (date: string) => {
    const momentDate = moment(date);

    return momentDate.format('DD MMM YYYY HH:mm');
  };

  return (
    <Card
      extra={<TodoItemHeaderViewComponent id={id} />}
      style={{ width: 300 }}
      title={index + shiftIndex}
    >
      <p>{description}</p>
      <p>{convertDate(creationDate)}</p>
    </Card>
  );
};

export default TodoItemComponent;
