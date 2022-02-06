const http = require('http');
const fs = require('fs');

const reqest = (req,res)=>{
const data = fs.readFileSync('./api/userapi.json','utf-8');
const a = JSON.parse(data);

res.statusCode=200;
res.setHeader('Content-type','text/html')
if(req.url==='/'){
res.end("<a href='/home'>Go to home</a>");
}
else if(req.url==='/about'){
res.end("about");
}
else if(req.url==='/home'){
res.end("homeeeee");
}
else if(req.url==='/link'){
res.end("Link");
}
else if(req.url==='/userapi'){
res.writeHead(200,{'content-type':'application/json'})
res.end(a[1].name)
console.log(a[0].name)

}
else{
    res.statusCode=404;
  res.end("NOT FOUND "+res.statusCode)
}

}

const server = http.createServer(reqest);
server.listen(3000,"127.0.0.1",()=>{
  console.log("Listening to the port no 3000")
});
