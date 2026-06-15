import React from 'react'

function Todo({ todo, index, removeTodo, toggleTodo }) {
  return (
    <div className={`todo ${todo.completed ? "completed" : " "}`}>
        <span onClick={ () => toggleTodo(index) }>{todo.text}</span>
        <button onClick={ () => removeTodo(index) }>x</button>
    </div>
  )
}

export default Todo;
