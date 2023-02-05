import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from './Todos'

type TodoListProprs = {
    data: Todo[],
    deleteTodo:(arg:number)=>void;
    toggleStatus:(arg:number)=>void;
}

const TodoList = ({ data,deleteTodo,toggleStatus }: TodoListProprs) => {
    return (
        <div>
            {data?.map((el) => (<TodoItem key={el.id} data={el} deleteTodo={deleteTodo} toggleStatus={toggleStatus}/>))}
        </div>
    )
}

export default TodoList