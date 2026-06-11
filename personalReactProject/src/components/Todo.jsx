

function Todo( {task, description} ) {

  return (
    <div className="todo-item">
      <h2> {task} </h2>
      <p style={{fontFamily : 'Franklin Gothic Medium', fontStyle : "italic"}}>{description}</p>
      <button>Delete</button>
    </div>

  )
}

export default Todo