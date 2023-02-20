//require mongoose 
const mongoose=require("mongoose")

const Schema=mongoose.Schema

//Create the user Schema

const articleSchema=new Schema({
    depotDate: Date,
    desc: String,
    title: String
})
const Article=mongoose.model("Article",articleSchema)
module.exports=Article