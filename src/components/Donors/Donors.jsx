import React from 'react'
import './Donors.css';
function Donors(props) {
  return (
    <div className='donors'>
        <h4>{props.type}</h4>
        <hr></hr>
        <img className='dimg' src={props.src}></img>
    </div>
  )
}

export default Donors