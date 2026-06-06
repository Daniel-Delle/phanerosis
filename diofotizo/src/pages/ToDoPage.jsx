import {useState} from 'react'
import ToDoForm from '../components/ToDoForm'
import Todo from '../components/ToDo'

function ToDoPage() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newToDos = {text, completed : false}
    setTodos([...todos, newToDos])
  }

  return (
    <div className='app'>
      <h1>React ToDo App</h1> 
      <ToDoForm addTodo={addTodo} />
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default ToDoPage