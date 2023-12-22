import React, { useState } from 'react';
import List from './components/list/list';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      task: 'coding'
    },
    {
      id: 2,
      task: 'eat'
    },
    {
      id: 3,
      task: 'sleep'
    }
  ]);

  const [tasks, setTasks] = useState(allTasks);

  const [searchInput, setSearchInput] = useState('');
  const [addInput, setAddInput] = useState('');

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(() => inputValue);

    setTasks((prevTasks) => {
      if (!inputValue.trim()) {
        return [...allTasks];
      }
      const filteredTasks = allTasks.filter((task) =>
        task.task.toLowerCase().includes(inputValue.toLowerCase())
      );
      return filteredTasks;
    });
  };

  const handleAddInputChange = (e) => {
    setAddInput(() => e.target.value);
  };

  const handleAddTask = () => {
    if (addInput.trim() !== '') {
      const newTask = {
        id: allTasks.length + 1,
        task: addInput
      };
      setAllTasks((prevTasks) => [...prevTasks, newTask]);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setAddInput('');
    }
  };

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <List tasks={tasks} />
      <input
        type="text"
        placeholder="Add task..."
        value={addInput}
        onChange={handleAddInputChange}
      />
      <Button onClick={handleAddTask} text="Add Task" />

      <button onClick={handleOpen}>Открыть</button>
      {show && <Modal handleOpen={handleOpen}></Modal>}
    </div>
  );
}

export default App;
