import "./App.css"
import Todo from "./components/Todo"
import TodoTitle from "./components/TodoTitle"

function App() {
  return (
    <>
      <TodoTitle />
      <Todo task = "Learn react" description = "Code along and take notes"/>
      <Todo task = "Finish Asap Frontend" description = "3 hours each day"/>
      <Todo task = "Land job" description = "Hahahaha"/>
      <Todo task = "Earn 10 billion" description = "Yagye sika"/>
    </>
  )
}

export default App
 