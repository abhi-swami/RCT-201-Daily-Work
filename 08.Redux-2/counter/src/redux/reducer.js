import {INC,DEC} from "./actionType";


const initialVal={
    count:0
}
export const reducer=(state=initialVal, action)=>{    

    switch(action.type){
        case INC:{
            return{
                ...state,
                count:state.count+action.payload,
            }
        }
        case DEC:{
            return{
                ...state,
                count:state.count-action.payload,
            }
        }
        default:{
            return {
               ...state
            } 
        }
    }
}

