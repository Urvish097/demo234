import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <>
        <button className='btn button' id={props.id} style={{backgroundColor:props.bg_color}}>{props.Name}</button>
    </>
  )
}

export default Button;