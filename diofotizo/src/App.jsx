import './App.css'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Navbar from './components/Navbar';
import ToDoPage from './pages/ToDoPage'
import Users from './pages/Users'
import JokePage from './pages/JokePage'
import User from './pages/User';

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path = '/' element = {<ToDoPage />} />
        <Route path = '/joke' element = {<JokePage />} />
        <Route path = '/users' element = {<Users />} />
        <Route path = '/user/:id' element = {<User />} />
      </Routes>

    </Router>



    {/* <ToDoPage /> */}
    {/* <Users /> */}
    {/* <JokePage/> */}

    </>
  )
}

export default App