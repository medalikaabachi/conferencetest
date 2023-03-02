const mongoose=require("mongoose")
const config=require("config")
// mongodb://127.0.0.1:27017/userauthdatabase
const connectDB=()=>{
    mongoose.connect(config.get("MONGO_URI"))
    .then(()=>console.log("mongoose connected"))
    .catch((err)=>console.log(err))

}

module.exports=connectDB;