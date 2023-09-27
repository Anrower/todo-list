import React, { useState } from 'react';
import { Input, Button, Tooltip } from 'antd';
import './index.scss';
import { useDispatch } from '../../../store/store';
import { addTodo } from '../../../slices/todoSlice';

const { TextArea } = Input;

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const creationDate = new Date().toISOString();

    dispatch(
      addTodo({
        id: creationDate,
        description,
        creationDate,
        isEdit: false,
      }),
    );
    setDescription('');
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <div className="add-todo">
      <h2>Add new Todo</h2>
      <TextArea onChange={handleChange} value={description} />
      {description.length
        ? (
          <Button onClick={handleAdd} type="primary">
            Add
          </Button>
        ) : (
          <Tooltip color="geekblue" placement="topLeft" title="You cannot add empty todo">
            <Button disabled={!description.length} onClick={handleAdd} type="primary">
              Add
            </Button>
          </Tooltip>
        )}
    </div>
  );
};

export default AddTodo;
