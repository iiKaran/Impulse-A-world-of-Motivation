import React from 'react'

export default function Chartrow(props) {
  return (
  <>
      <div className="chart-item">
        <img src={props.src} alt="loading" />
        <p>{props.desc}</p>
        <h6 className='name'>{props.name}</h6>
      </div>
   </>
    
  )
}
