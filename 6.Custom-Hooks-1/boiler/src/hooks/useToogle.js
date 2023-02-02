import {useState} from 'react'


//we want to return a boolean value ie eithe true or false and a function to toggle it
const useToggle = (initailValue) => {
    const [value,setValue]=useState(initailValue)
    const toggle=()=>{
        setValue(!value)
    };
    return[value,toggle]
    // array destructructuring --> order matters for array destructuring ie if we are using this useToggle function inside app.jsx then we must use the same vaule ie [value,toggel]. If we use [toggle,value] desctructuring the 2nd index element will be still pointing to function only


    // return{value,toggle}
    //object destructuring --> order dose not matters for object destructuring because data inside object are stored in form of key value pairs and key is always unique so {value,toggle} or{toggle,value} both can be use as destructuring inside the app.jsx
}

export default useToggle


// hooks are nothing but function, hooks allows us to use reuse the logic again and agian ie we have to write the logic for once and we can use the same logic again and again
// so we can say that hook increases the reusablity of code
// do not call the hooks inside the loops,conditions and nested functions
// don't call the hooks from regular javascript function

// call hooks from custom hooks or call hooks at the top of the function
// for custom hook always prefix all the functions with the 'use' ie useAPIFunction, useFectchData etc..


// in simple words custom hooks are functional componants without jsx


// we want to maintain same DATA/STATE across the entire app then we should use Context API
// when we want to reuse the LOGIC againg and again we use  custom hooks/hooks