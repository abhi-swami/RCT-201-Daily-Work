import { DEC, INC } from "./actionType"

const handleAdd=(payload)=>{
    return{
        type:INC,
        payload,
    }
}
const handleReduce=(payload)=>{
    return{
        type:DEC,
        payload,
    }
}
export {handleAdd,handleReduce}