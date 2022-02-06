const path = require('path')
const express = require('express');
const app = express();
const fs = require('fs')

console.log(path.join(__dirname,'public'))

app.use(express.static(path.join(__dirname , 'public')))


app.listen((port=3000),()=>{
  console.log(`Connected to port ${port}`)
});
