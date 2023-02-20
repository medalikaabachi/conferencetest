//require mongoose 
const mongoose=require("mongoose")

const Schema=mongoose.Schema

//Create the user Schema

const conferenceSchema=new Schema({
    startDate: Date,
    endDate: Date,
    desc: String,
    name: String,
    
})
const Conference=mongoose.model("Conference",conferenceSchema)
module.exports=Conference