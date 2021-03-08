import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './ToDo/TodoList'



function App() {
  let todos = [
      {id: 1, complited: false, title: 'Купить хлеб'},
      {id: 2, complited: false, title: 'Купить масло'},
      {id: 3, complited: false, title: 'Купить молоко'}
  ]

  function toggleTodo(id) {
      todos = todos.map(todo => {
          if (todo.id === id) {
              todo.complited = !todo.complited
          }
          return todo
      })
  }

  return (
    <div className='wrapper'>
      <h1>React JS</h1>
      <TodoList todos = {todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
