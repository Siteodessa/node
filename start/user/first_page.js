
// Task is http://127/0/0/1/echo?message=Hello -> Hello or Bye

// ver 1 is just answering the request, but takes no url
// var http = require('http');
// var server = new http.Server(function(req,res){
// console.log(req.method, req.url);
// res.end();
// });
//
// server.listen(1337, '127.0.0.1')

// ver 2 is parsing url
var http = require('http');
var url = require('url');
var server = new http.Server(function(req,res){
console.log(req.method, req.url);
var urlParsed = url.parse(req.url, true)
console.log(urlParsed);
 if  (urlParsed.pathname == '/echo' && urlParsed.query.message){
   var my404 = `<div class="bg_bl">
   Welcome To
   multistring nodes

   </div>`
   res.end(my404 + urlParsed.query.message);
 } else {
   res.statusCode = 404;
   res.end("Page not found" + urlParsed.pathname + urlParsed.query.message);
 }
});

server.listen(1337, '127.0.0.1');

// and you get

// protocol: null,
// slashes: null,
// auth: null,
// host: null,
// port: null,
// hostname: null,
// hash: null,
// search: null,
// query: null,
// pathname: '/',
// path: '/',
// href: '/'
