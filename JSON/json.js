const fs = require ('fs');

const student = {
  name:"aman",
  class:"tybcs"
}

const convert = JSON.stringify(student);


console.log(convert);

fs.writeFile("newfile.js",convert,(error)=>{
  console.log("Done")
})
// fs.appendFile("newfile.js",convert+"Aman",(error)=>{
//   console.log("Done")
// })

fs.readFile("newfile.js","utf-8",(error,data)=>{
  console.log(data)
})




// fs.unlink("newfile.js",(error)=>{
//   console.log("done!!!!!!!!")
// })
