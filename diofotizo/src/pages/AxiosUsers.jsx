import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
    const[users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                const data = res.data
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
    }, [])  
    
    
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        {users.map(user => (
            <div className="card shadow-sm" key={user.id}>
                <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <p className="card-text">{user.email}</p>
                    <Link to = {`/user/${user.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Users