import { useState } from 'react';

import Header from './components/Header';
import Day from './components/Day';
import Form from './components/Form';
import ListTasks from './components/ListTasks';
import Week from './components/Week';
import Month from './components/Month';
import Year from './components/Year';

import './App.css';

const App = () => {
  const [tab, setTab] = useState('day'); // component state to manage the active tab
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500">To Do App</h1>
      <div className='Todo-container'>
        <Header tab={tab} setTab={setTab}/> {/* passing the state and the state updater function as props to the Header component */}
        {
          tab === 'day' && <>
            <Day/>
            <Form/>
            <ListTasks/>
          </>
        }
        {tab === 'week' && <Week/>}
        {tab === 'month' && <Month/>}
        {tab === 'year' && <Year/>}

      </div>

    </main>
  );
}

export default App;
