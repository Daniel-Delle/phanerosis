import {useState} from 'react'

function LikeButton() {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const handleLike =() => {
        if (liked ) {
            setLikeCount(likeCount - 1)
        } else {
            setLikeCount(likeCount + 1)
        }
        setLiked(!liked)
    }

  return (
    <div style= {styles.container}>
       <button onClick={handleLike} style={{
        ...styles.button,
        backgroundColor : liked ? '#1877f2' : '#e4e6eb',
        color : liked ? 'white' : 'black'
       }}> {liked ? 'Unlike' : 'Like'} ({likeCount})</button> 
    </div>
  )
}

const styles = {
    container : {
        textAlign : 'Center',
        margin : '20px'
    },
    button : {
        padding : '10px 20px',
        fontSize : '1rem',
        border : 'none',
        borderRadius : '20px',
        cursor : 'pointer',
        fontWeight : 'bold'
    }
}

export default LikeButton