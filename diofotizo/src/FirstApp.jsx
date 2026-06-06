import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import ProfileCard from "./components/ProfileCard"

function App() {
    const name = "Kofi"
    const age =21
    const isLoggedIn = true

    function getGreeting(user) {
        return `Hello ${user}`
    }

    const user1 = {name:"Kwaku", age:12}

    const records = [
        {name:"Yaw", age: 12},
        {name:"Abena", age: 16},
        {name:"Kofi", age: 14},
    ]
    
    return (
        <div>
            Hello World
            <button className="btn">Click me</button>

            
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{getGreeting("Kwaku")}</p>

            <Card user1 = {user1} title = "testing" />

            <div style={{display : "flex", justifyContent : "center", gap : "4px"}}>
                <ProfileCard name = "Dom" description = "Male student" />
                <ProfileCard name = "Fray" description = "Female student" />
            </div>
        </div>
        
 )
}

export default App
