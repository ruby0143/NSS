import React from 'react'
import './event.css';
function Events(props) {
  return (
    <div className='events'>
      <h3>Events </h3>
      <hr></hr>
      <div className='row'>
      <h4 className='h4'>{props.category}</h4>
        {props.text}
      </div>
    </div>
  )
}

export default Events