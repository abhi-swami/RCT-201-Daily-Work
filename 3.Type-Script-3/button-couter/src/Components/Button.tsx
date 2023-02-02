import React from 'react'

type ButtonProps={
  text:string,
  handleClick:(arg:string)=>void
}

function Button({text,handleClick}:ButtonProps) {
  return (
    <button onClick={()=>handleClick(text)}>{text}</button>
  )
}

export default Button


