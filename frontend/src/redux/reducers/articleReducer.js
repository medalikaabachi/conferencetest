import { GET_ARTICLE } from "../actionType"

const initState={
    Articles:[]
}

export const articleReducer=(state=initState,action)=>{
    switch(action.type){
case GET_ARTICLE:
    return{
      ...state,
      Articles:action.payload
    }
    default:
        return state
}
}