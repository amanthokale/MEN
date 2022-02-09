const studentSchema = require('./studentSchema')
const mongoose = require('mongoose')



const Student = new mongoose.model('Student',studentSchema);


module.exports=Student
