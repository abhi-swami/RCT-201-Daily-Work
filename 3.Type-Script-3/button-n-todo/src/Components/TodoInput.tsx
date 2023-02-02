
import { useState } from "react"


interface TodoInputProps{
    handleAdd:()=>void
}

export default function TodoInput(){
    const [todoTitle,setTodoTitle]=useState<string>('');
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodoTitle(e.target.value)
    }
    const handleClick=()=>{
        // setTodoTitle(e.target.value)
        // props.handleAdd()
    }
    return(
        <>
        <input placeholder="Add 
        A New Todo" value={todoTitle} onChange={handleChange}/>
        <button onClick={handleClick}>Add </button>

        </>
    )
}