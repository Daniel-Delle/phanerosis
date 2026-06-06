import {useState} from 'react'
import LikeButton from './components/LikeButton'

function App() {
    const[name, setName] = useState("")
    const[count, setCount] = useState(0)
    let a = 1

    const adjust = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }    

  return (
    <div>
        <p>{count}</p>
        <button onClick={adjust}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <br /> <br />

        <input type="text" onChange={(e) =>setName(e.target.value)}/>
        <p>{name}</p>

        <LikeButton />

    </div>
  )
}

export default App