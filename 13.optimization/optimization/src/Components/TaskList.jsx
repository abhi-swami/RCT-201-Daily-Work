import React from "react";
import generateRandomColor from "./randomColor";
const TaskList = ({ id, title, body, verifyPost,toggleStatus }) => {
   const bg=generateRandomColor();

  return <div style={{ width:'40%',margin:'auto',backgroundColor:bg, color:'white'}}>
    <h3>Title - <span style={{fontSize:'14px'}}>{title}</span> </h3>
    <h3>body- <span style={{fontSize:'14px'}}>{body}</span> </h3>
    <h3>Vefiyed Post ? <span style={{fontSize:'14px'}}>{verifyPost?'True':'false'}</span></h3>
    <button onClick={()=>toggleStatus(id)}>Toggle Verify</button>
  </div>;
};
const checkEquality=(prevProp,currentProp)=>{
  if(prevProp.title===currentProp.title && prevProp.body===currentProp.body){
      return true;
  }
  return false;
}


export default React.memo(TaskList,checkEquality);
