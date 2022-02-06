const eventEmmitter = require('events');



const e = new eventEmmitter();


e.on('water',()=>{
  console.log("1");
})
e.on('water',()=>{
  console.log("2");
})
e.on('water',()=>{
  console.log("3");
})
e.on('water',()=>{
  console.log("4");
})
e.on('water',()=>{
  console.log("5");
})


e.emit('water')
