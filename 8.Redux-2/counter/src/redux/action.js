import { INC, DEC } from "./actionType.js";
export const increment = (payload=1) => ({ type: INC, payload });

export const decrement = (payload=1) => ({ type: DEC, payload });


// export const increment=()=>{

//     console.log("Increment function clicked");
// }
