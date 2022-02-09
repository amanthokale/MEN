const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
  Name:{
    type:String,
    trim:true,
    lowercase:true
  },
  Roll_no:{
    type:Number,
    trim:true,
  },
  Email:{
    type:String,
    trim:true,
    lowercase:true
  },
  Mobile:{
    type:String,
    trim:true,
  },
  College:{
    type:String,
    trim:true,
    lowercase:true
  }
})

module.exports=studentSchema
