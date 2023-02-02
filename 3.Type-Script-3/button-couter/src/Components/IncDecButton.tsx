import React from 'react'
type IncDecButtonProps={
    children:string;
    // this is to be followed when the childer in a primitive data type(string,boolean,number)


    
    // children:React.ReactNode|JSX.Element|JSX.Element[];
    //this is to be followed when one or more than one JSX element is passed as the childern to the componant
    //react stores more than one JSX element in the form of array of JSX element and this array of JSX element is called as React Node
    value:number
    handleChange:(arg:number)=>void;
}
const IncDecButton = ({children,value,handleChange}:IncDecButtonProps) => {
  return (
    <button onClick={()=>handleChange(value)}>{children}</button>
  )
}

export default IncDecButton