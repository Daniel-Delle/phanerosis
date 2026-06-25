import { useState } from "react";
import ReactConfetti from "react-confetti";

    // Random number generated and stored
let randomNumberValue = Math.floor(Math.random() *10) +1 ;
function Guessbutton() {

    // state declarations
    const [inputValue, setInputValue] = useState(" ") ;
    const [result, setResult] = useState("")
    const [reveal, setReveal] = useState("")
    const [celebrate,setCelebrate] = useState(false)
    

    // Comparing user input and number generated
    function compare() {
        if (randomNumberValue === inputValue) {
            setCelebrate(true)
            return <p>You got it right!</p>
        } else {
            setCelebrate(false)
            return <p>Wrong answer, try again.</p>
        }
    }

    // Revealing answer 
    function answer() {
        setReveal(`The number is ${randomNumberValue}.`)
        // return <p>{reveal}</p>
    }

       
  return (
  <div className="min-vh-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center">
    
    {/* Header */}
    <h1 className="display-4 fw-bold text-warning text-center">
      WELCOME TO DANIEL'S GUESSING GAME
    </h1>
    <p className="lead text-center mb-5">Challenge your mind here.</p>
    <p className="lead text-center mb-5">Can you guess the number?(The number ranges from 1 to 10)</p>

    {/* Game box */}
    <div className="card bg-secondary text-white p-4 text-center w-50">
      <h3 className="fw-bold mb-3">GUESS THE NUMBER!</h3>
      
      {/* Putting user input in a container or state */}
      <input
        type="number"
        placeholder="Type your guess here"
        onChange={(e) => setInputValue(Number(e.target.value))}
        value={inputValue}
        className="form-control text-center mb-3"
      />

    {/* Determining what happens after user clicks */}
      <button
        onClick={() => { setResult(compare()); 

            setInputValue(""); }}
        className="btn btn-warning fw-bold mb-2"
      >
        GUESS
      </button>

      <button
        onClick={answer}
        className="btn btn-outline-light"
      >
        Reveal Answer
      </button>
    </div>

    {/* Results */}
    <div className="mt-4 text-center fs-5">
      <p>{result}</p>
      <p>{reveal}</p>
      {celebrate === true ? <ReactConfetti /> : null}
    </div>

  </div>
)
}

export default Guessbutton