const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')
const hbs = require('hbs');

console.log(path.join(__dirname,"/htmlFiles/partials"))

app.use(express.static(path.join(__dirname , 'public')))
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"htmlFiles/viewsa"))   // Changed the name of views to viewsa

hbs.registerPartials(path.join(__dirname,"/htmlFiles/partials"))

app.get ('/',(req,res)=>{
  res.render('index',{
    component:"Aman"                      //Sending data as props
  })
})

app.get ('/home',(req,res)=>{
  res.send("<h1> AMAN THOKALEEEEEEEE </h1>")
})

app.get ('*',(req,res)=>{
  res.send("<h1>ERROR 404 NOT FOUND</h1>")
})



app.listen((port=3000),()=>{
  console.log(`Connected to port ${port}`)
});
