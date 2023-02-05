import {useState} from 'react'

type TodoInputProps={
    handleAdd:(arg:string)=>void;
}

const TodoInput = ({handleAdd}:TodoInputProps) => {
    const [todoTitle,setTodoTitle]=useState("")

    const handleChange=(e:React.ChangeEvent<HTMLInputElement> )=>{
        setTodoTitle(e.target.value)
    }
    const handleClick=()=>{
        handleAdd(todoTitle)
    }

  return (
    <div>
        <input placeholder='Add A New Todo' value={todoTitle} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput