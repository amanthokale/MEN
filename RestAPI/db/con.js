const mongoose  = require('mongoose');


mongoose.connect(`mongodb://localhost:27017/Students_DB`).then(()=>{
  console.log("Connected to Students_DB")
}).catch("Connextion Failed")
