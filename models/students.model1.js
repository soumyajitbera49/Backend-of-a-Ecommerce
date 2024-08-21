// Define the schema of students collections to be stored in DB
const mongoose = require("mongoose")



//Schema
const studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 19
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 15
    },
    subjects : [String]
    
},{versionKey : false, timestamps : true})



//Go aheaad and create corresponding collections in DB
module.exports = mongoose.model("Student", studentsSchema)
