import React, { useState } from 'react';
import classes from './TasksFilter.module.css';

export function TasksFilter({ changeFilter }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    changeFilter(filter);
  };

  return (
    <ul className={classes.filters}>
      <li>
        <label>
          <input
            type="radio"
            value="All"
            checked={selectedFilter === 'All'}
            onChange={() => handleFilterChange('All')}
            className={selectedFilter === 'All' ? classes.selected : ''}
          />
          All
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value="Active"
            checked={selectedFilter === 'Active'}
            onChange={() => handleFilterChange('Active')}
            className={selectedFilter === 'Active' ? classes.selected : ''}
          />
          Active
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value="Completed"
            checked={selectedFilter === 'Completed'}
            onChange={() => handleFilterChange('Completed')}
            className={selectedFilter === 'Completed' ? classes.selected : ''}
          />
          Completed
        </label>
      </li>
    </ul>
  );
}
