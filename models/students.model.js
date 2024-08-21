// Define the schema of students collections to be stored in DB
const mongoose = require("mongoose")



//Schema
const studentsSchema = new mongoose.Schema({
    name : String,
    age : Number
})



//Go aheaad and create corresponding collections in DB
module.exports = mongoose.model("Student", studentsSchema)
