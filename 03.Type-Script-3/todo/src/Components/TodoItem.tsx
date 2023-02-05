import React from 'react'
import { Todo } from './Todos'

enum TodoStatus{
    PENDING="pending",
    DONE="done",
  }
const {PENDING,DONE}=TodoStatus

type TodoItemProps={
    data:Todo;
    deleteTodo:(arg:number)=>void;
    toggleStatus:(arg:number)=>void;
}


const TodoItem = ({data,deleteTodo,toggleStatus}:TodoItemProps) => {
    const {id,title,status}=data;
  return (
    <div style={{border:"1px solid red", width:"30%", margin:"auto"}}>
        <h3>Title:{title}</h3>
        <h3>Status:{status?DONE:PENDING}</h3>
        <button onClick={()=>toggleStatus(id)}>Toggle Status</button>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoItem