import {useState} from 'react'

function ToDoForm({ addTodo }) {
  const [formData, setFormData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData) return

    addTodo(formData)
    setFormData('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} placeholder="Enter a task..." />

      <button type="submit">Add</button>
    </form>
  )
}

export default ToDoForm