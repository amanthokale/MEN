const express  = require('express');
const router = new express.Router()
const Student = require('../modules/studentModel')

router.post('/users',(req,res)=>{
    const a = new Student(req.body);
    a.save().then(()=>{
      console.log("DATA INSERTED SUCCESSFULLY")
    }).catch((e)=>{
      console.log(e)
    })
    res.send(a)
    console.log(req.body)
});


router.get('/users',async(req,res)=>{
    const a = await Student.find()
    res.send(a)
    console.log(a)
});


router.get('/users/:id',async(req,res)=>{
  const id = req.params.id;
  const a = await Student.findById({_id:id})
  res.send(a)
  console.log(a)
});


router.patch('/users/:id',async(req,res)=>{
  const id = req.params.id;
  const a = await Student.findByIdAndUpdate({_id:id},req.body)
  res.send(a)
  console.log(a)
});

router.delete('/users/:id',async(req,res)=>{
  const id = req.params.id;
  const a = await Student.findByIdAndDelete({_id:id})
  res.send(a)
  console.log(a)
});


module.exports=router
