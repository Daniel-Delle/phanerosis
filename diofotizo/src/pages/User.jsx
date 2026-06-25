import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function User() {
    const [user, setUser] = useState({})
    const [Loading, setLoading] = useState(false)

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const data = await res.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])   
    
    if (Loading) {
            return <div className="spinner-border" role='status' id="loading">
                <span className='visually-hidden'></span>
            </div>
    }


  return (
//    <div>
//     {user.name}
//    </div>
    <div>
        <div className="container">
        <div className="mx-auto">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="fw-bold">
                        {user.name} <br />
                        <span className="text-muted">{user.email}</span>
                    </p>

                    <div className="">
                        <p>Address</p>
                        <p className="text-muted">{user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    
  )
}

export default User