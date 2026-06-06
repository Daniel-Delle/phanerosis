
function Card({user1, title}










) {

  return (
    <div className="card" >
        <h1>Card Components</h1>
        <p>{user1.name}</p>
        <p>{user1.age}</p>
        <p>{title}</p>
    </div>
  )
}

export default Card