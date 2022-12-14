import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()  // 입력할 때마다 페이지 reload 방지
    
    // 새로운 할 일 데이터 newTodo
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue('');
  }

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>To do List</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        

      </div>
    </div>
  )
}