const express  = require('express');
const app = express();
require('./db/con');
const Student = require('./modules/studentModel')
const port = process.env.PORT || 3000;
const studentRouter = require('./Routers/routers');

app.use(express.json());
app.use(studentRouter)

app.listen(port,()=>{
    console.log(`Connected to port ${port}`)
});
