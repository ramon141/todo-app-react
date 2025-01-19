import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import axios from 'axios';

function App() {

  const [listTasks, setListTasks] = useState([]);
  const [showListTasks, setShowListTasks] = useState([]);
  const [modeSort, setModeSort] = useState('Tudo');

  const handleSubmit = (task) => {
  }

  const handleDelete = (id) => {
  }

  const handleCheck = (task) => {
  }

  const handleEdit = (task) => {
  }

  const handleSortList = (mode) => {
    setModeSort(mode);
  }

  useEffect(() => {
    if (modeSort === 'Tudo') {
      setShowListTasks(
        listTasks
      )
    } else if (modeSort === 'Incompleto') {
      let sortedListTasks = listTasks.filter(t => !t.status);
      setShowListTasks(
        sortedListTasks
      )
    } else {
      let sortedListTasks = listTasks.filter(t => t.status);
      setShowListTasks(
        sortedListTasks
      )
    }
  }, [listTasks, modeSort])


  return (
    <div className="flex flex-col items-center w-full h-full bg-white my-10 gap-6">
      <h1 className="text-4xl font-bold uppercase text-gray-600">ToDo List</h1>
      <Header
        handleSubmit={handleSubmit}
        sortHandler={handleSortList}
      />
      <Todos
        tasks={showListTasks}
        checkHandler={handleCheck}
        deleteHandler={handleDelete}
        editeHandler={handleEdit} />
    </div>
  );
}

export default App;

