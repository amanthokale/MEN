const fs = require('fs');
const stream = require('stream');


//READ STREAM
//
// let readstream = fs.createReadStream('newfile.js')
// var data = ""
//
// readstream.on('data', (arguments) => {
//     data = data + arguments;
// });
//
// readstream.on('end', (arguments) => {
//   console.log(data)
// });
//
// //WRITE STREAM
// let write = fs.createWriteStream('output.js')
// var hui = "hui hui hui"
// write.write(kk,'utf-8')
//
// write.end()


//PIPE STREAM

let readstream = fs.createReadStream('newfile.js')
let writestream = fs.createWriteStream('output.js')

readstream.pipe(writestream);
