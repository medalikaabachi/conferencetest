import { GET_CONFERANCE } from "../actionType"
import axios from "axios"

// fecth
export const getConferance=()=>async(dispatch)=>{
    try{
        const option={
            headers:{
                'authorization':localStorage.getItem('token'),
            },
        }
        const res=await axios.get("/api/conference/conferences",option)
        dispatch({
            type:GET_CONFERANCE,
            payload:res.data
        })
    }
    catch(error){
        console.log(error)
    }
}

// Add
export const addconferance=(newconferance)=>async(dispatch)=>{
    try{
        const config={
            headers:{"authorization":localStorage.getItem("token")
        }}
        const res=await axios.post("/api/conference/addconference",newconferance,config)
        console.log(res.data,"azerty")
        dispatch(getConferance())
    }
    catch(error){
        console.log(error)
    }
}

    //delete
    export const deleteconferance=(id)=>(dispatch)=>{
        try{
            const config={
                headers:{"authorization":localStorage.getItem("token")
            }}
        axios.delete(`/api/conference/delete/${id}`,config)
        .then((res)=>dispatch(getConferance()))
        .catch((err)=>console.log(err))
    }
    catch(error){
        console.log(error)
    }
}

       

    //edit
    export const editconferance=(idconferance,editedconferance)=>(dispatch)=>{
        try{
            const config={
                headers:{"authorization":localStorage.getItem("token")
            }}
        axios.put(`/api/conferance/edit/${idconferance}`,editedconferance,config)
        .then((res)=>dispatch(getConferance()))
        .catch((err)=>console.log(err))
    }
    catch(error){
        console.log(error)
    }
}