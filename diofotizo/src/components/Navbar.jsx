import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div className='navbar navbar-expand-lg '>
        <ul className="navbar-nav me-auto mb 2">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/joke' className="nav-link">Joke</Link>
            <Link to='/users' className="nav-link">Users</Link>
        </ul>      
    </div>
  )
}

export default Navbar