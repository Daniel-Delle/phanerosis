import "./App.css"
import Todo from "./components/Todo"
import TodoTitle from "./components/TodoTitle"

function App() {
  // Objects.........
  const task1 = {
    task : "Learn React",
    description : "Build Projects",
    complete : true
  }

  const task2 = {
    task : "Meet targets",
    description : "Two hours daily",
    complete : true
  }

  const task3 = {
    task : "Master React",
    description : "More Projects",
    complete : false
  }

  const task4 = {
    task : "Python and Django",
    description : "1 hour daily",
    complete : false
  }


  return (
    // Using objects........
    <>
      <TodoTitle />
      <Todo todoDiv={task1}/>      
      <Todo todoDiv={task4}/>
      <Todo todoDiv={task2}/>
      <Todo todoDiv={task3}/>
    </>






// WITHOUT OBJECTS..........
    // <>
    //   <TodoTitle />
    //   <Todo task = "Learn react" description = "Code along and take notes" complete = {true}  />
    //   <Todo task = "Finish Asap Frontend" description = "3 hours each day" complete={false} />
    //   <Todo task = "Land job" description = "Hahahaha" complete={true} />
    //   <Todo task = "Earn 10 billion" description = "Yagye sika" complete={false} />
    // </>
  )
}


export default App
 