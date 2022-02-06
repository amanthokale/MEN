const express = require('express');
const app = express();
const fs = require('fs')



const file = fs.readFileSync('../newfile.js','utf-8')

app.get ('/',(req,res)=>{
  res.json([{
    name:"aman"
  }])
})

app.get ('/home',(req,res)=>{
  res.send("<h1> AMAN THOKALEEEEEEEE </h1>")
})

app.listen((port=3000),()=>{
  console.log(`Connected to port ${port}`)
});
