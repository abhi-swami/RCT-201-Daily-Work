import { INC,DEC } from "./actionType.js";

export const increment=()=>({type:INC,payload:1})
export const decrement=()=>({type:DEC,payload:1})