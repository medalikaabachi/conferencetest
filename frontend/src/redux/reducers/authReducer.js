  
import{GET_AUTH_USER,LOGOUT_USER} from "../actionType.js"


const initState={
    token:null,
    user:null,
    isAuth:false,
    msg:null,
}
export const authReducer=(state=initState,action)=>{
    switch(action.type){

        case 'REGISTER_USER':
              case 'LOGIN_USER':
                localStorage.setItem("token",action.payload.token)
        return{
              ...state,
                
                user:action.payload.user,
                isAuth:true,
                msg:action.payload.msg
            }
            case GET_AUTH_USER:
                return{
                    ...state,
                    isAuth:true,
                    user:action.payload.user
                }
                case LOGOUT_USER:
                    localStorage.removeItem("token")
                    return{
                        ...state,
                        isAuth:false,
                        user:null,
                        msg:null


                    }
              
                default :
                return state

    }
}
