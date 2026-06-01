import { useState } from 'react';

import Header from './components/Header';
import Day from './components/Day';
import Form from './components/Form';
import ListTasks from './components/ListTasks';

import './App.css';

const App=()=> {
  /*const[count,setCount]=useState(0)*/
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500">To Do App</h1>
      <div className='Todo-container'>
        <Header/>
        <Day/>
        <Form/>
        <ListTasks/>
      </div>

    </main>
  );
}

export default App;
