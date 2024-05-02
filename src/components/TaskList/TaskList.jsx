import React from 'react';

import Task from '../Task/Task';

import classes from './TaskList.module.css';

export function TaskList({
  todos,
  deleteTask,
  onToggleCompleted,
  updateTask,
  setIsTimerRunning,
  setElapsedTime,
}) {
  const elements = todos.map((item) => {
    return (
      <li className={classes.description} key={item.id}>
        <Task
          {...item}
          deleteTask={() => deleteTask(item.id)}
          onToggleCompleted={() => {
            onToggleCompleted(item.id);
          }}
          updateTask={updateTask}
          timeCreated={item.created}
          setIsTimerRunning = {setIsTimerRunning}
          setElapsedTime = {setElapsedTime}
        />
      </li>
    );
  });

  return <ul className={classes['todo-list']}>{elements}</ul>;
}
