function Todo( {todoDiv} ) {
  return (
    
    <div className="todo-item" style={{backgroundColor : todoDiv.complete ? "#ef476f" : "#ffc43d"}}>
      
      <h2> {todoDiv.task} </h2>

      <p style= {{fontFamily : 'Franklin Gothic Medium', fontStyle : "italic"}}> {todoDiv.description} </p>

      <p className={todoDiv.complete ? "c-para" : "inc-para"}> {todoDiv.complete ? "Completed" : "! Not Done Yet !" } </p>
      
      <button>Delete</button>

    </div>











// WITHOUT OBJECTS......
    // <div className="todo-item" >

    //   <h2> {task} </h2>

    //   <p style= {{fontFamily : 'Franklin Gothic Medium', fontStyle : "italic"}}> {description} </p>

    //   <p className={complete ? "c-para" : "inc-para"}> {complete ? "Completed" : "! Not Done Yet !" } </p>
      
    //   <button>Delete</button>

    // </div>

  )
}

export default Todo