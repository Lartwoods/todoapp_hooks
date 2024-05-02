import React, { useState } from 'react';
import classes from './NewTaskForm.module.css';

export default function NewTaskForm({ onAddTask }) {
  const [description, setDescription] = useState('');

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.trim() !== '') {
      onAddTask(description);
      setDescription('');
    }
  };

  return (
    <form className={classes['new-todo']} onSubmit={onSubmit}>
      <input
        className={classes.edit}
        onChange={onDescriptionChange}
        placeholder="What needs to be done?"
        value={description}
        autoFocus
      />
    </form>
  );
}
