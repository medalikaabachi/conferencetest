import axios from "axios"
import { GET_AUTH_USER, REGISTER_USER,LOGOUT_USER,LOGIN_USER} from "../actionType"
export const registerUser=(newUser)=>(dispatch)=>{
axios.post("/api/auth/register",newUser)
.then((res)=>dispatch({type:REGISTER_USER,payload:res.data}))
.catch((err)=>console.log(err))
}
//login
export const loginUser=(user)=>(dispatch)=>{
axios.post("/api/auth/login",user)
.then((res)=>dispatch({type:LOGIN_USER,payload:res.data}))
.catch((err)=>console.log(err))
}
export const getAuthUser=()=>(dispatch)=>{
    const config={
        headers:{"authorization":localStorage.getItem("token")
    }}
axios.get("/api/auth/user",config)
.then((res)=>dispatch({type:GET_AUTH_USER,payload:res.data}))
.catch((err)=>console.log(err))
}

export const logoutUser=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
    }
    