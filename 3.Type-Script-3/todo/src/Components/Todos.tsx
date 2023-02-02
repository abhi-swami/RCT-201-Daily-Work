import axios from 'axios';
import { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const url = `http://localhost:8080/todos`

export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (param: string) => {
    axios<Todo[]>({
      method: 'post',
      url: `${url}`,
      data: {
        title: param,
        status: false,
      }
    });
    fetchData()
  }
  const deleteTodo = (id: number) => {
    axios.delete<"">(`${url}/${id}`);
    fetchData();
  }

  const toggleStatus = (id: number) => {
    const res=todos.filter((el)=>el.id===id);
    const stat=res[0].status

    axios.patch<Todo>(`${url}/${id}`, {
      status: !stat,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })

  }

  const getData = () => {
    return axios.get(`${url}`).then(res => res.data)
  }
  const fetchData = async () => {
    const res = await getData()
    setTodos(res)
  }
  useEffect(() => {
    fetchData()
  }, [deleteTodo, toggleStatus, handleAdd])
  return (
    <div>
      <TodoInput handleAdd={handleAdd} />
      <TodoList data={todos} deleteTodo={deleteTodo} toggleStatus={toggleStatus} />
    </div>
  )
}

export default Todos