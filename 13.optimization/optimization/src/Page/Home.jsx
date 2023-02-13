import React, { useEffect, useState, useRef, useCallback } from "react";
import InputForm from "../Components/InputForm";
import TaskList from "../Components/TaskList";
import Timer from "../Components/Timer";

const initialData = [
  {
    id: 1,
    title: "Title 1",
    body: "This is body of Title1",
    verifyPost: false,
  },
];



const Home = () => {
  const [time, setTime] = useState(5);
  const [task,setTask]=useState(initialData)
  const ref = useRef();

  const handleAdd=useCallback((param)=>{
    const payload={
        ...param,verifyPost: false,id:task.length+1,
    }
    setTask([...task,payload])
  },[])
  
  const toggleStatus=(id)=>{
    let newTodo= task.map((el)=>el.id===id?{...el,verifyPost:!el.verifyPost}:el);
    setTask(newTodo)
  }

//   useEffect(() => {
//     ref.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//     const cleanUp = () => {
//       clearInterval(ref.current);
//     };
//     return cleanUp;
//   }, []);

  return (
    <div>
      <Timer time={time} />
      {/* <Timer /> */}
      <InputForm handleAdd={handleAdd}/>
      {task.length && task.map((el)=>
      <TaskList key={el.id} {...el} toggleStatus={toggleStatus}/>
      )}
    </div>
  );
};

export default Home;
