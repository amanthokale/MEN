const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
res.writeHead(200,{"content-type":"application/json"})

const data = fs.readFileSync('./api/userapi.json','utf-8');
const a = JSON.parse(data);
res.end(a[0].name)
})


server.listen(3000,"127.0.0.1",()=>{
  console.log("Listening to the port no 3000")
});
