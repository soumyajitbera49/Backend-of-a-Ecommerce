const mongoose = require('mongoose')
const studentModel = require("./models/students.model1")

// Write the code to connect with Mongo DB

mongoose.connect("mongodb://localhost/be_demodb")

const db = mongoose.connection  //start the connection with Mongo Db

db.on("error",()=>{
    console.log("Error while connecting to DB")
})

db.once("open",()=>{
    console.log("Connected to MongoDB")
    //logic to insert data into the db
    init()
    //Running the queries
    dbQueries()
})

async function init(){
    //logic to insert data into db
    const student = {
        name : "Soumyajit Bera",
        age : 21,
        email : "soumyajit@gamil.com",
        subjects : ["Computer","History"]
    }

   const std_obj = await studentModel.create(student)
   console.log(std_obj)
}

async function dbQueries(){
    //Read the student data
    console.log("Inside the db queries function")
    //Read the studebnt data based on the id
    try{
        const student = await studentModel.findById("66707db92872d2ec74e60380")
        console.log(student)
    }
    catch(err){
        console.log(err)
    }

    //I want to search based on name
    try{
    //const students = await studentModel.find({name:"Soumya"})
    //const students = await studentModel.findOne({name:"Soumya"})
    //const students = await studentModel.find({name:"Kushti"}) //null
    const students = await studentModel.find({}) //acts like a find all
    console.log(students)
    }
    catch(err){
        console.log(err)
    }

    //Deal with multiple conditions
    const stds = await studentModel.where("age").gt("10").where("name").equals("Soumya").limit(2)
    console.log(stds)


    //delete a document where name = "Soumya"
    const student = await studentModel.deleteOne({name : "Soumya"})
    console.log(student)
}