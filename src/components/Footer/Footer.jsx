import React from 'react';
import { TasksFilter } from '../TasksFilter/TasksFilter';
import classes from './Footer.module.css';

export function Footer({ tasksLeftCount, changeFilter, deleteCompletedTasks }) {
  return (
    <footer className={classes.footer}>
      <span className={classes['todo-count']}>{tasksLeftCount} items left</span>
      <TasksFilter changeFilter={changeFilter} />
      <button
        className={classes['clear-completed']}
        onClick={() => {
          deleteCompletedTasks();
          setIsTimerRunning(false);
          setElapsedTime(0); 
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}
