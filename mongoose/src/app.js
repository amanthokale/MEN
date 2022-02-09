const mongoose = require('mongoose');
const validator = require('validator')
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
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    minlength:2,
    maxlength:20,
    validate(v){
      if(v==="amanthokale"){
        throw new Error("HUI")
      }
    }
  },
  Email:{
    type:String,
    required:true,
    unique:true,
    validate(v){
      if(!validator.isEmail(v)){
        throw new Error("Invalid Email")
      }

    }
  },
  Subject:{
    type:String,
    enum:["CS"],
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
function insertdoc (){

const studentList = new Student({
  Name:"Aman Thokale",
  Roll_no:176,
  College:"Nowrosjee Wadia College",
  Subject:"CS",
  Email:"amanfdgdfsk@kk.com",
  active:true,
})

const a = new Student({
  Name:"Aman",
  Roll_no:176,
  College:"Nowrosjee Wadia College",
  active:true,
})

const c = new Student({
  Name:"Ajay Meena",
  Roll_no:100,
  College:"Nowrosjee Wadia College",
  active:true,
})
const d = new Student({
  Name:"Pratik Tikute",
  Roll_no:101,
  College:"Nowrosjee Wadia College",
  active:true,
})
const e = new Student({
  Name:"Suyog Gaikwad",
  Roll_no:105,
  College:"Nowrosjee Wadia College",
  active:true,
})

studentList.save().then(()=>{                             //Single Document
  console.log("Data inserted successfully")
}).catch((error)=>{
  console.log(error)
});
// Student.insertMany([studentList,a,c,d,e]).then(()=>{
//   console.log("Data inserted successfully")
// }).catch((error)=>{
//   console.log(error)
// })
 }


//insertdoc();



// const getdoc = async ()=>{
//   const a = await Student.find({Name:"Aman Thokale"}).select({College:1,_id:0}).limit(3)
//   console.log(a);
// }

//COMPARISON OPERATOR

// const getdoc = async ()=>{
//   const a = await Student.find({Name:{$nin:["Aman","Pratik Tikute"]},Roll_no:{$gte:100}}).select({College:0,_id:0})
//   console.log(a);
// }

// LOGICAL OPERATOR

// const getdoc = async ()=>{
//   const a = await Student.find().sort({Roll_no:-1})
//   console.log(a);
// }


//getdoc();



//UPDATE Document

const updatedoc= async ()=>{
  const a = await Student.findOneAndUpdate({Name:"Aman Thokale"},{$set:{Name:"Huzef",Roll_no:121}},{new:true});
  console.log(a)
  
}

//updatedoc();


const deletedoc=async()=>{
  const a = await Student.findByIdAndDelete({_id:"620266d07e22bfbce3cd284a"})
  console.log(a)
}
//deletedoc();
