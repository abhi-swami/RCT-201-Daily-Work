import { CANCEL, EVALUATE } from "./calculatorActionType"

export const evaluate=(payload)=>{
    return{
        type:EVALUATE,
        payload
    }
}
export const cancel=(payload)=>{
    return{
        type:CANCEL,
        payload
    }
}