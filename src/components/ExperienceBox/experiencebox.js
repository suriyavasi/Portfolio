import React from 'react';
import "./experiencebox.css";

const experiencebox = ({number,title,style}) => {
  return (
    <div style={{...style}} className='experience__box'>
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  )
}

export default experiencebox
