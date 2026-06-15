import {useState, ueseEffect, useEffect} from 'react'

function JokePage() {
    const [value, setValue] = useState({})
    const [loading, setLoading] = useState(false)

    // useeEffect
    useEffect (() => {
        fetchJoke()
    }, [])
    
    // function to fetch random joke
    const fetchJoke = async () => {
        setLoading(true)
        try {
           const res = await fetch('https://icanhazdadjoke.com', { headers : {
            Accept : "application/json"
           }
            
           }) 
            const data = await res.json()
            console.log(data)
            setValue(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
        }
        if (loading) {
            return <div className="spinner-border" role='status'>
                <span className='visually-hidden'> </span>
            </div>
    }


  return (
    <div className='card'>
        <div className="card-body">
            <p>{value.joke}</p>
            <button className='btn btn-primary' onClick={() => fetchJoke() }>New Joke</button>
        </div>
    </div>
  )
}

export default JokePage