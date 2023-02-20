import { GET_CONFERANCE } from "../actionType"

const initState={
    Confs:[]
}

export const confReducer=(state=initState,action)=>{
    switch(action.type){
case GET_CONFERANCE:
    return{
      ...state,
       Confs:action.payload
    }
    default:
        return state
}
}