import { useEffect, useState } from "react"

function Users() {
    const[users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
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
            <div className="card" key={user.id}>
                <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <p className="card-text">{user.email}</p>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Users