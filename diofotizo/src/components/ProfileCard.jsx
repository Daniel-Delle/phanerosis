

function ProfileCard({name, description}) {
  return (
    <div style={cardStyle}>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

const cardStyle = {
    border : "1px solid #ddd",
    borderRadius : "8px",
    padding : "16px",
    width : "300px",
    textAlign : "center",
    boxShadow : "0 2px 5px rgba(0,0,0,0.1)",
    margin : "16px"

}

export default ProfileCard