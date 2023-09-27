import React from 'react';
import { Button, Card } from 'antd';
import moment from 'moment';

export type TodoItemPropsType = {
  creationDate: string;
  description: string;
  index: number;
};

const TodoItemComponent = ({
  creationDate,
  description,
  index,
}: TodoItemPropsType) => {
  const shiftIndex = 1;

  const convertDate = (date: string) => {
    const momentDate = moment(date);

    return momentDate.format('DD MMM YYYY HH:mm');
  };

  return (
    <Card style={{ width: 300 }} title={index + shiftIndex}>
      <p>{description}</p>
      <p>{convertDate(creationDate)}</p>
    </Card>
  );
};

export default TodoItemComponent;
