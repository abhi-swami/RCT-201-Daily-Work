import React, { useCallback, useState } from 'react'
import expensiveOperation from './expensiveOperation';
const initial={
    title:'',
    body:'',
}
const InputForm = ({handleAdd}) => {
    expensiveOperation(200)
    const [text,setText]=useState(initial);
    const {title,body}=text
    const handleChange=(e)=>{
        const{name,value}=e.target;
        console.log(name,value)
        setText({...text,[name]:value});
    }
    const handleClick=()=>{
        handleAdd(text)
    }
  return (
    <div>
        <h3>Add A New Task</h3>
        <input type='text' name='title' value={title} placeholder='Title' onChange={handleChange}/>
        <br/>
        <br/>
        <input type='text' name='body' value={body} placeholder='body' onChange={handleChange}/>
        <br/>
        <br/>
        <button onClick={handleClick}>Add</button>

    </div>
  )
}


export default InputForm;