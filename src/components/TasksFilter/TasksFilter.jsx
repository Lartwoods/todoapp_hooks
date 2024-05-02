import React, { useState } from 'react';
import classes from './TasksFilter.module.css';

export function TasksFilter({ changeFilter }) {
  const [isSelected, setIsSelected] = useState(false);
  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };
  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };
  return (
    <ul className={classes.filters}>
      <li>
        <button
          className={isSelected ? 'selected' : ''}
          onClick={() => {
            handleFilterChange('All');
            handleButtonClick();
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            handleFilterChange('Active');
            handleButtonClick();
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            handleFilterChange('Completed');
            handleButtonClick();
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
