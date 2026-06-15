import {useState} from 'react'
import ToDoForm from '../components/ToDoForm'
import Todo from '../components/ToDo'

function ToDoPage() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newToDos = {text, completed : false}
    setTodos([...todos, newToDos])
  }
 
  // remove todos
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  // complete
  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>React ToDo App</h1> 
      <ToDoForm addTodo={addTodo} />
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo todo={todo} index={index} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        ))}
      </div>
    </div>
  )
}

export default ToDoPage