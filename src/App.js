import React, { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import { Footer } from './components/Footer/Footer';
import classes from './App.module.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [maxId, setMaxId] = useState(10);

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const addTask = (text) => {
    const newTask = {
      id: maxId,
      description: text,
      completed: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
    setMaxId(maxId + 1);
  };

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const updateTask = (id, updatedDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: updatedDescription } : task
      )
    );
  };

  let filteredTasks = tasks;
  if (filter === 'Active') {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === 'Completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  const doneCount = tasks.filter((task) => task.completed).length;
  const tasksLeftCount = tasks.length - doneCount;

  return (
    <>
      <section className={classes.todoapp}>
        <header className={classes.header}>
          <h1>todos</h1>
          <NewTaskForm onAddTask={addTask} />
        </header>
        <section className={classes.main}>
          <TaskList
            todos={filteredTasks}
            deleteTask={deleteItem}
            onToggleCompleted={onToggleCompleted}
            updateTask={updateTask}
            setIsTimerRunning={setIsTimerRunning}
            setElapsedTime={setElapsedTime}
          />
        </section>
        <Footer
          tasksLeftCount={tasksLeftCount}
          changeFilter={changeFilter}
          deleteCompletedTasks={deleteCompletedTasks}
          setIsTimerRunning={setIsTimerRunning}
          setElapsedTime={setElapsedTime}
        />
      </section>
    </>
  );
}
