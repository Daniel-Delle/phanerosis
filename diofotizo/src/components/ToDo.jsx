import React from 'react'

function Todo({ todo }) {
  return (
    <div>
        <span>{todo.text}</span>
        <button>x</button>
    </div>
  )
}

export default Todo;
