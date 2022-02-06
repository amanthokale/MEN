const mongoose = require('mongoose');

//Connection to the database
mongoose.connect('mongodb://localhost:27017/aman').then(()=>{
  console.log("Database Connection successful")
}).catch((err)=>{
  console.log(err);
});


//Creating Schema
const studentSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Roll_no:Number,
  College:String,
  active:Boolean,
  date:{
    type:Date,
    default:Date.now()
  }
})


//Creating mongoose model ---to create ""collections"" and add data
const Student = new mongoose.model("Student",studentSchema);

//Creating Documents

const studentList = new Student({
  Name:"Aman Thokale",
  Roll_no:176,
  College:"Nowrosjee Wadia College",
  active:true,
})


studentList.save().then(()=>{
  console.log("Data inserted successfully")
}).catch((error)=>{
  console.log(error)
});
