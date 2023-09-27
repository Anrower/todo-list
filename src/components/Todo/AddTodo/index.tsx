import React, { useState } from 'react';
import { Input, Button } from 'antd';

import './index.scss';
import { useDispatch } from '../../../store/store';
import { addTodo } from '../todoSlice';

const { TextArea } = Input;

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const date = new Date().toISOString();

    dispatch(
      addTodo({
        description: value,
        date,
      }),
    );
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="add-todo">
      <h2>Add new Todo</h2>
      <TextArea onChange={handleChange} />
      <Button onClick={handleAdd} type="primary">
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
