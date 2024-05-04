import React, { useState, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
// import Timer from '../Timer/Timer';
import classes from './Task.module.css';

export default function Task({
  completed,
  description,
  onToggleCompleted,
  timeCreated,
  id,
  updateTask,
  deleteTask,
}) {
  const [editing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const inputRef = useRef(null);

  const onEditTask = () => {
    setEditing(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onSaveTask = () => {
    if (editedDescription.trim() !== description) {
      updateTask(id, editedDescription.trim());
    }
    setEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSaveTask();
    }
  };

  const timePast = formatDistanceToNow(timeCreated);
  let classNames = classes.description;
  if (completed) {
    classNames = `${classes.description} ${classes.completed}`;
  }

  return (
    <div className={classes.view}>
      {!editing ? (
        <>
          <input
            className={classes.toggle}
            type="checkbox"
            onChange={onToggleCompleted}
            checked={completed}
          />
          <label>
            <span
              className={classNames}
              onClick={onToggleCompleted}
              style={{ cursor: 'pointer' }}
            >
              {description}
            </span>
            {/* <Timer startTime={timeCreated} /> */}
            <span className={classes.created}>created {timePast} ago</span>
          </label>
          <button
            className={`${classes.icon} ${classes['icon-edit']}`}
            onClick={onEditTask}
          ></button>
          <button
            className={`${classes.icon} ${classes['icon-destroy']}`}
            onClick={deleteTask}
          ></button>
        </>
      ) : (
        <input
          type="text"
          className={classes.editInput}
          value={editedDescription}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          ref={inputRef}
        />
      )}
    </div>
  );
}
