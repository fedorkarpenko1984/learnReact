import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './ToDo/TodoList'



function App() {
  const todos = [
      {id: 1, complited: false, title: 'Купить хлеб'},
      {id: 2, complited: false, title: 'Купить масло'},
      {id: 3, complited: false, title: 'Купить молоко'}
  ]

  return (
    <div className='wrapper'>
      <h1>React JS</h1>
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;
