import "./App.css"
import Todo from "./components/Todo"
import TodoTitle from "./components/TodoTitle"

function App() {
  // Using an array of objects
  const tasks = [
  {
      task : "Learn React",
      description : "Build Projects",
      complete : true,
  },

  {
    task : "Meet targets",
    description : "Two hours daily",
    complete : true,
    },

  {
    task : "Master React",
    description : "More Projects",
    complete : false,
  },

  {
    task : "Python and Django",
    description : "1 hour daily",
    complete : false,
  }
]

// delete function
  const deleteBtn = deleteBtn => alert("deleted")

  return (
    // Using objects........
    <>
      <TodoTitle />
      <Todo todoDiv={tasks[0]} dbtn = {deleteBtn}/>      
      <Todo todoDiv={tasks[3]} dbtn = {deleteBtn}/>
      <Todo todoDiv={tasks[1]} dbtn = {deleteBtn}/>
      <Todo todoDiv={tasks[2]} dbtn = {deleteBtn}/>
    </>






// WITHOUT OBJECTS..........
    // <>
    //   <TodoTitle />
    //   <Todo task = "Learn react" description = "Code along and take notes" complete = {true}  />
    //   <Todo task = "Finish Asap Frontend" description = "3 hours each day" complete={false} />
    //   <Todo task = "Land job" description = "Hahahaha" complete={true} />
    //   <Todo task = "Earn 10 billion" description = "Yagye sika" complete={false} />
    // </>


    // Objects.........
  // const task1 = {
  //   task : "Learn React",
  //   description : "Build Projects",
  //   complete : true,
  //   ray : ["apple", "banana", "bread"]
  // }

  // const task2 = {
  //   task : "Meet targets",
  //   description : "Two hours daily",
  //   complete : true,
  //   }

  // const task3 = {
  //   task : "Master React",
  //   description : "More Projects",
  //   complete : false,
  // }

  // const task4 = {
  //   task : "Python and Django",
  //   description : "1 hour daily",
  //   complete : false,
  //   ray : ["apple", "banana", "bread"],
  // }
  )
}


export default App