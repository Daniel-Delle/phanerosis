
function Popup( {title} ) {
  
    
  return (
    <div className="popupbox">

      <div className='popup'>
        <span >{title}</span> 
        <div className="popup_btns"> <br />
          <button className='popup_btn' onClick={confirmEvent => console.log("confirm")}> Confirm </button>
          <button className='popup_btn popup_btn' onClick={CancelEvent => console.log("delete")}> Cancel </button>
        </div>
      <div className="backdrop"></div>

    </div>

    </div>
    
  )
}

export default Popup