import {useState} from 'react'

function Counter() {
  let [user, setUser] = useState( {name:"Delle", age:25})

  
  return (
  
    <div>
        <h1>Details: {user.age} {user.name} </h1>
        {/* Using a callback with argument (prevName) within a set state to access the previous value */}
        <button onClick={ () => {
          setUser( (prevUser) => ({
            ...prevUser,
            age : prevUser.age +1
          }))
        }}>Increase</button>


        <button onClick={ () => {
          setUser( (prevUser) => ({
            ...prevUser,
            age : prevUser.age -1
          }) )
        } }>Decrease</button>


        <button onClick={ ()=> setUser( (prevUser) => ({
          ...prevUser,
          name:'Delle',
          age:25
        }))}>Reset</button>
    </div>
  )
}


// const [arrays, setArrays] = useState([])
 // Using arrays
    // <div>
    //   <h1> {arrays.toString()} </h1>
    //   <button onClick={ () => setArrays( (prevArray ) =>{
    //     return [...prevArray,  "+1"]
    //   } )  }>Increment</button>


    //   <button onClick={ ()=> setArrays( (prevArray) => {
    //     return [...prevArray, "-1"]
    //   } ) }>Decrement</button>

    // </div>

export default Counter