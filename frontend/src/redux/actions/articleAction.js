import { GET_ARTICLE} from "../actionType"
import axios from "axios"

// fecth
export const getArticle=()=>async(dispatch)=>{
    try{
        const option={
            headers:{
                'authorization':localStorage.getItem('token'),
            },
        }
        const res=await axios.get("/api/article/articles",option)
        dispatch({
            type:GET_ARTICLE,
            payload:res.data
        })
    }
    catch(error){
        console.log(error)
    }
}

// Add
export const addarticle=(newarticle)=>async(dispatch)=>{
    try{
        const config={
            headers:{"authorization":localStorage.getItem("token")
        }}
        const res=await axios.post("/api/article/addarticle",newarticle,config)
        console.log(res.data,"azerty")
        dispatch(getArticle())
    }
    catch(error){
        console.log(error)
    }
}

    //delete
    export const deletearticle=(id)=>(dispatch)=>{
        try{
            const config={
                headers:{"authorization":localStorage.getItem("token")
            }}
        axios.delete(`/api/article/delete/${id}`,config)
        .then((res)=>dispatch(getArticle()))
        .catch((err)=>console.log(err))
    }
    catch(error){
        console.log(error)
    }
}

       

    //edit
    export const editarticle=(idarticle,editedarticle)=>(dispatch)=>{
        try{
            const config={
                headers:{"authorization":localStorage.getItem("token")
            }}
            console.log("ici c paris")
        axios.put(`/api/article/editarticle/${idarticle}`,editedarticle,config)
        .then((res)=> {
            console.log("haha")
            dispatch(getArticle())
        })
        .catch((err)=>console.log(err))
    }
    catch(error){
        console.log(error)
    }
}