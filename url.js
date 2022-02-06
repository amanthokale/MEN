var url = require('url');

var url = require('url');ssssssss
//var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
//
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

const ard = new URL('https://example.org:81/foo');

console.log(ard.href)
console.log(ard.host)
console.log(ard.hostname)
console.log(ard.origin)
