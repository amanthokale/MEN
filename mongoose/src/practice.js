const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/practice").then(()=>{
  console.log("Connected successfully to database")
}).catch((err)=>{
  console.log(err)
});


const pSchema = new mongoose.Schema({
  name:String,
  roll_no:Number
})



const PModal = new mongoose.model("list",pSchema);


const practice = new PModal({
    name:"t",
    roll_no:"sdfsdf"
})



practice.save().then(()=>{
  console.log("Data inserted successfullly")
}).catch((err)=>{
  console.log(err)
});;
